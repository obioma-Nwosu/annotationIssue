import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ElectricalEngineerService } from "./services/electrical-engineer.service";
import {RoleEnum} from "./models/role";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @ViewChild('viewer', { static: true }) viewer!: ElementRef;

  user: string | null = '';
  decryptedRole: string | null = '';
  selectedAnnotation: Core.Annotations.Annotation[] = [];


  webviewerInstance: any;
  private modalInstance: any;

  //Services for different roles
  private electricalEngineerService: ElectricalEngineerService = new ElectricalEngineerService();

  constructor(private modalService: NgbModal) {
    this.user = 'Obi';
    this.decryptedRole = RoleEnum.isElectricalEngineer;
  }

  ngOnChanges() {
    this.setDocumentInfo('pdfDocumentName');
  }
  ngOnInit() {
    this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
  }

  wvDocumentLoadedHandler(): void {
    this.webviewerInstance.UI.openElement('notesPanel');
    this.setDocumentInfo('pdfDocumentName')
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../../../wv-resources/lib',
      licenseKey: 'demo:1718669587944:7fbfa2ae030000000066cfa65edb95a148fb3fece503fe4c78259558e6',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
    }, this.viewer.nativeElement).then((instance: any) => {
      this.webviewerInstance = instance;
      console.log('WebViewer Instance:', this.webviewerInstance);
      this.webviewerInstance.UI.setLanguage('en');

      this.electricalEngineerService.initialize(
        this.webviewerInstance,
        this.user,
        this.decryptedRole as RoleEnum,
        () => this.openModal());

      instance.UI.disableElements(['replies']);

      instance.UI.NotesPanel.setNotePanelDocumentInfo({
        docInfo: { text: 'pdfDocumentName' }
      });

      const { annotationManager, documentViewer, AnnotationManager } = this.webviewerInstance.Core;
      const { disableElements } = this.webviewerInstance.UI;

      disableElements(['toolbarGroup-Shapes', 'toolbarGroup-Edit', 'toolbarGroup-Insert',
        'toolbarGroup-Forms', 'toolbarGroup-FillAndSign', 'menuButton', 'viewControlsButton']);


      if (documentViewer && annotationManager) {

        annotationManager.addEventListener('annotationChanged', (annotations: Core.Annotations.Annotation[], action: string) => {
          const actions = [
            AnnotationManager.AnnotationChangedActions.ADD,
            AnnotationManager.AnnotationChangedActions.DELETE,
            AnnotationManager.AnnotationChangedActions.MODIFY
          ];
          if (actions.includes(action) && annotations.length > 0) {
            annotations.forEach(annotation => {
              const exists = annotation.getCustomData('exists');
              if (action === AnnotationManager.AnnotationChangedActions.ADD && (exists === 'false')) {
                annotation.setCustomData('exists', 'true');
              }
            });
            const filteredAnnotations = annotations.filter(a => a.Subject !== 'Widget');
            if (filteredAnnotations.length > 0) {
              this.exportAnnotations();
            }
          }
        });

        documentViewer.addEventListener('documentLoaded', this.wvDocumentLoadedHandler);

        documentViewer.addEventListener('pagesUpdated', () => {
          this.handlePageChange();
        });

        documentViewer.addEventListener('pageDeleted', () => {
          this.handlePageChange();
        });

        documentViewer.addEventListener('pageAdded', () => {
          this.handlePageChange();
        });

        documentViewer.addEventListener('pageMoved', () => {
          this.handlePageChange();
        });
      }
    });
  }

  private setDocumentInfo(documentName: string): void {
    if (this.webviewerInstance) {
      const { annotationManager } = this.webviewerInstance.Core;
      const annotations = annotationManager.getAnnotationsList();

      annotations.forEach((annotation: any) => {
        this.webviewerInstance.UI.NotesPanel.setNotePanelDocumentInfo({
          docInfo: { text: documentName }
        });
      });
    }
  }

  private handlePageChange() {
    const { documentViewer, annotationManager } = this.webviewerInstance.Core;

    if (documentViewer && annotationManager) {
      annotationManager.exportAnnotations().then((xfdf: string) => {
        const adjustedXfdf = this.adjustAnnotationsPageNumbers(xfdf);
        this.saveDocumentAndAnnotations(adjustedXfdf);
      }).catch((error: any) => {
        console.error('Error exporting annotations:', error);
      });
    } else {
      console.error('DocumentViewer or AnnotationManager is not initialized.');
    }
  }

  private adjustAnnotationsPageNumbers(xfdf: string): string {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xfdf, 'application/xml');
    const annotations = xmlDoc.getElementsByTagName('annots')[0].getElementsByTagName('annot');

    for (let i = 0; i < annotations.length; i++) {
      const pageElement = annotations[i].getElementsByTagName('page')[0];
      const currentPageNumber = parseInt(pageElement.textContent || '0', 10);
      const adjustedPageNumber = this.calculateNewPageNumber(currentPageNumber);
      pageElement.textContent = adjustedPageNumber.toString();
    }

    const serializer = new XMLSerializer();
    return serializer.serializeToString(xmlDoc);
  }

  private calculateNewPageNumber(currentPageNumber: number): number {
    return currentPageNumber;
  }

  private saveDocumentAndAnnotations(adjustedXfdf: string) {
    console.log('Saved document', adjustedXfdf)
  }

  private exportAnnotations() {
    const { annotationManager } = this.webviewerInstance.Core;

    if (annotationManager) {
      annotationManager.exportAnnotations({ links: false, widgets: false, fields: false }).then((xfdf: string) => {
        try {
          sessionStorage.setItem('xfdfAnnotations', xfdf);
          console.log('success', 'Annotations saved', 'Annotations stored in session storage');
        } catch (error) {
          console.error('Error saving annotations to session storage:', error);
        }
      })
        .catch((error: any) => {
          console.error('Error exporting annotations:', error);
        });
    } else {
      console.error('AnnotationManager is not initialized.');
    }
  }

  private importAnnotations() {
    const storedXFDF = sessionStorage.getItem('xfdfAnnotations');

    if (storedXFDF) {
      this.webviewerInstance.Core.annotationManager.importAnnotations(storedXFDF)
        .then(() => {
          const { annotationManager, documentViewer } = this.webviewerInstance.Core;

          if (documentViewer && annotationManager) {
            annotationManager.getAnnotationsList().forEach((annotation: { getPageNumber: () => any; setPageNumber: (arg0: number) => void }) => {
              const pageNumber = annotation.getPageNumber();
              if (pageNumber > documentViewer.getPageCount() || pageNumber < 1) {
                console.warn(`Annotation on invalid page number ${pageNumber}`);
                annotation.setPageNumber(Math.min(Math.max(pageNumber, 1), documentViewer.getPageCount()));
              }
            });
            annotationManager.drawAnnotationsFromList(annotationManager.getAnnotationsList());
            console.log('success', 'Annotations loaded', 'Annotations imported successfully from session storage');
          } else {
            console.error('DocumentViewer or AnnotationManager is not initialized.');
          }
        })
        .catch((error: any) => {
          console.error('Error importing annotations:', error);
        });
    } else {
      console.warn('No annotations found in session storage.');
    }
  }


  openModal() {
    alert('Hi')

    const { annotationManager, AnnotationManager } = this.webviewerInstance.Core;
    this.selectedAnnotation = annotationManager.getSelectedAnnotations();
    this.updateChangeNotificationCustomValues();
  }

  updateChangeNotificationCustomValues() {
    const { documentViewer } = this.webviewerInstance.Core;
    const statusText = this.getStatusText(1);
    const statusColor = this.getStatusColor(3);

    this.electricalEngineerService.updateCustomNotificationValues(
      '1234567',
      statusText,
     '1',
      '1',
      statusColor
    );

    this.exportAnnotations();
    console.log('Setting the Custom Properties from Component Viewer --------------', this.selectedAnnotation);

    this.electricalEngineerService.setCustomProperties(
      this.selectedAnnotation[0]
    );

    documentViewer.refreshAll();
    documentViewer.updateView();
  }

  private getStatusText(status: number): string {
    switch (status) {
      case 1:
        return 'Open';
      case 2:
        return 'InProgress';
      case 3:
        return 'Closed';
      case 9:
        return 'Irrelevant';
      default:
        return '';
    }
  }

  private getStatusColor(status: number): string {
    switch (status) {
      case 1:
        return '#FF2640';
      case 2:
        return '#FFD732';
      case 3:
        return '#E96401';
      case 9:
        return '#9999A9';
      default:
        return '#FF2640';
    }
  }

  submitPanelForm(): void {
    console.log('Hello World');
  };

  ngOnDestroy() {
    sessionStorage.removeItem('pdfDocumentName');
  }
}
