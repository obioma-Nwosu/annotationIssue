import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {RoleEnum} from "../models/role";

@Injectable({
  providedIn: 'root'
})
export class ElectricalEngineerService {

  //---------------------------- Variables ------------------------------------//
  annotationType = 'Change Notification'; // TODO: translate and use Enums
  notificationNumber = 'Nr'; // TODO: translate and use Enums
  status = 'Open'; // TODO: translate and use Enums
  annotationTypeNumber = ''; // TODO: translate and use Enums
  exists = 'false'; // TODO: translate and use Enums
  notificationId = ''; // TODO: translate and use Enums
  statusColor = '#baaf15'; // TODO: translate and use Enums
  selectedAnnotation: Core.Annotations.Annotation[] = [];

  private webviewerInstance: any;
  private user!: string|null ;
  private openModalCallback!: () => void;

  constructor() { }

  initialize(webviewerInstance: any, user: string | null, role: RoleEnum, openModalCallback: () => void) {
    this.user = user;
    this.webviewerInstance = webviewerInstance;
    this.openModalCallback = openModalCallback;
    if (role === RoleEnum.isElectricalEngineer) {
      this.setUpElectricalEngineerPermissions();
    }
  }

  private setUpElectricalEngineerPermissions() {
    const { annotationManager, documentViewer, AnnotationManager } = this.webviewerInstance.Core;
    annotationManager.addEventListener('annotationSelected', () => {
      this.selectedAnnotation = annotationManager.getSelectedAnnotations();
      if (this.selectedAnnotation) {

        console.log('Selected', this.selectedAnnotation);
      }
    });
    annotationManager.setCurrentUser('Guest');

    annotationManager.addEventListener('annotationChanged', (annotations: Core.Annotations.Annotation[], action: string) => {
      if (action === AnnotationManager.AnnotationChangedActions.ADD) {
        const filteredAnnotations = annotations.filter(a => a.Subject !== 'Widget');
        filteredAnnotations.forEach(annotation => {
          const exists = annotation.getCustomData('exists');
          if (!exists || exists === 'false') {
            console.log(annotation.Subject);
            this.addEECustomProperties(annotation);
            this.setCustomProperties(annotation);
            this.webviewerInstance.Core.annotationManager.redrawAnnotation(annotation);
          } else if (exists === 'true') {
            const notificationNumber = annotation.getCustomData('notificationNumber');
            const annotationType = annotation.getCustomData('annotationType');
            const annotationTypeNumber = annotation.getCustomData('annotationTypeNumber');
            const status = annotation.getCustomData('status');
            const statusColor = annotation.getCustomData('statusColor');
            console.log(`Restoring custom properties for annotation with notification number: ${notificationNumber}`);
            console.log('Custom Data:', notificationNumber, annotationType, annotationTypeNumber, status, statusColor);
            this.setCustomProperties(annotation);
            this.webviewerInstance.Core.annotationManager.redrawAnnotation(annotation);
          }
        });
      }
    });

    // TODO: Validate that only EE can use this
    const addPageButton = {
      type: 'actionButton',
      img: `<svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C4.89543 0 4 0.89543 4 2V8.75H6V2H12V7H16.5V16.5H6V15.25H4V16.5C4 17.6046 4.89543 18.5 6 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V6.41421C18.5 5.88378 18.2893 5.37507 17.9142 5L13.5 0.58579C13.1249 0.21071 12.6162 0 12.0858 0H6Z" fill="#868E96"></path><path d="M2.5 9.5V8H0.5V9.5C0.5 11.433 2.067 13 4 13L8 13.0004V14.5004C8 14.7064 8.2352 14.824 8.4 14.7004L11.4667 12.4004C11.7333 12.2004 11.7333 11.8004 11.4667 11.6004L8.4 9.30045C8.2352 9.17685 8 9.29445 8 9.50045V11.0004H4C3.17157 11.0004 2.5 10.3284 2.5 9.5Z" fill="#868E96"></path></svg>`,
      onClick: () => {
        const info = documentViewer.getDocument().getPageInfo(documentViewer.getCurrentPage());
        const width = info.width;
        const height = info.height;
        documentViewer.getDocument().insertBlankPages([Number(documentViewer.getCurrentPage())], width, height);
      },
      title: 'Add Page'
    };

    this.webviewerInstance.UI.setHeaderItems((header: UI.Header) => {
      header.push(addPageButton);
    });

  }

  private handleButtonClick() {
    this.openModalCallback();
  }

  updateCustomNotificationValues(
    //TODO: Think of annotation type
    notificationNumber: string,
    status: string,
    annotationTypeNumber: string,
    notificationId: string,
    statusColor: string
  ) {
    if (this.selectedAnnotation.length > 0) {
      const annotation = this.selectedAnnotation[0];
      console.log(annotation);
      annotation.setCustomData('notificationNumber', notificationNumber);
      annotation.setCustomData('status', status);
      annotation.setCustomData('annotationTypeNumber', annotationTypeNumber);
      annotation.setCustomData('notificationId', notificationId);
      annotation.setCustomData('statusColor', statusColor);

      // Update the annotation's custom properties in the UI
      this.setCustomProperties(annotation);
    }
  }

  private addEECustomProperties(annotation: Core.Annotations.Annotation) {

    // Set custom properties
    annotation.setCustomData('annotationType', this.annotationType);
    annotation.setCustomData('notificationNumber', this.notificationNumber);
    annotation.setCustomData('status', this.status);
    annotation.setCustomData('exists', this.exists);
    annotation.setCustomData('annotationTypeNumber', this.annotationTypeNumber);
    annotation.setCustomData('notificationId', this.notificationId);
    annotation.setCustomData('statusColor', this.statusColor);

    // Refresh the annotation to ensure properties are applied
    this.webviewerInstance.Core.annotationManager.redrawAnnotation(annotation);
  }

  setCustomProperties(
    annotation: Core.Annotations.Annotation
  ) {
    this.webviewerInstance.UI.NotesPanel.setNoteButtonArea({
      buttons: [
        {
          label: `ÄM/${annotation.getCustomData('notificationNumber')}`,
          onClick: () => this.handleButtonClick(),
          color: '#ff0000'
        }
      ]
    });
    this.webviewerInstance.UI.NotesPanel.setNotePanelAnnotationInfo({
      annotInfo: { text: `${annotation.getCustomData('annotationType')} ${annotation.getCustomData('annotationTypeNumber')}` }
    });

    this.webviewerInstance.UI.NotesPanel.setNoteStatusTagArea({
      tag: { text: `${annotation.getCustomData('status')}`, backgroundColor: `${annotation.getCustomData('statusColor')}` }
    });
    this.webviewerInstance.Core.annotationManager.redrawAnnotation(annotation);
  }
}
