import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useOnClickOutside from 'hooks/useOnClickOutside';
import DataElements from 'constants/dataElement';

import DataElementWrapper from 'components/DataElementWrapper';
import PopupPortal from 'components/PopupPortal';
//import Icon from 'components/Icon';
import getOverlayPositionBasedOn from 'helpers/getOverlayPositionBasedOn';
import PropTypes from 'prop-types';
import getRootNode from 'helpers/getRootNode';

import './NoteState.scss';

const propTypes = {
  style: PropTypes.object,
  triggerElementName: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  handleStateChange: PropTypes.func,
};

const NoteStatePopup = ({
  style,
  triggerElementName,
  onClose = () => {},
  handleStateChange = () => {},
}) => {
  const [t] = useTranslation();
  const [position, setPosition] = useState({ left: 'auto', right: 'auto', top: 'auto' });
  const popupRef = useRef();
  const isMultiSelect = triggerElementName === DataElements.NOTE_MULTI_STATE_BUTTON;

  useOnClickOutside(popupRef, (e) => {
    const querySelector = isMultiSelect ? `[data-element="${DataElements.NOTE_MULTI_STATE_BUTTON}"]` : `[data-id="${triggerElementName}"]`;
    const triggerElement = getRootNode().querySelector(querySelector);
    const clickedTrigger = triggerElement.contains(e.target);
    if (!clickedTrigger) {
      // we only want to close the popup if we clicked outside and not on the trigger
      onClose();
    }
  });

  const createOnStateOptionButtonClickHandler = (state) => {
    return () => {
      handleStateChange(state);
    };
  };

  useEffect(() => {
    const position = getOverlayPositionBasedOn(triggerElementName, popupRef, false, isMultiSelect ? 'data-element' : 'data-id');
    setPosition(position);
  }, []);

  return (
    <PopupPortal
      id="note-state-popup-portal"
      position={position}
    >
      <div
        style={style}
        className="note-state-options"
        ref={popupRef}
      >
        <DataElementWrapper dataElement="notePopupState">
          <DataElementWrapper
            dataElement="notePopupStateClarification"
            className="note-state-option"
            onClick={createOnStateOptionButtonClickHandler('Clarification')}
          >
            {/*<Icon glyph="icon-annotation-status-accepted" />*/}
            {t('option.state.clarification')}
          </DataElementWrapper>
          <DataElementWrapper
            dataElement="notePopupStateRevision"
            className="note-state-option"
            onClick={createOnStateOptionButtonClickHandler('Revision')}
          >
            {/*<Icon glyph="icon-annotation-status-rejected" />*/}
            {t('option.state.revision')}
          </DataElementWrapper>
          {/*<DataElementWrapper*/}
          {/*  dataElement="notePopupStateCancelled"*/}
          {/*  className="note-state-option"*/}
          {/*  onClick={createOnStateOptionButtonClickHandler('Cancelled')}*/}
          {/*>*/}
          {/*  <Icon glyph="icon-annotation-status-cancelled" />*/}
          {/*  {t('option.state.cancelled')}*/}
          {/*</DataElementWrapper>*/}
          <DataElementWrapper
            dataElement="notePopupStateChangeNotification"
            className="note-state-option"
            onClick={createOnStateOptionButtonClickHandler('changeNotification')}
          >
            {/*<Icon glyph="icon-annotation-status-completed" />*/}
            {t('option.state.changeNotification')}
          </DataElementWrapper>
          {/*<DataElementWrapper*/}
          {/*  dataElement="notePopupStateNone"*/}
          {/*  className="note-state-option"*/}
          {/*  onClick={createOnStateOptionButtonClickHandler('None')}*/}
          {/*>*/}
          {/*  <Icon glyph="icon-annotation-status-none" />*/}
          {/*  {t('option.state.none')}*/}
          {/*</DataElementWrapper>*/}
          {/*<DataElementWrapper*/}
          {/*  dataElement="notePopupStateMarked"*/}
          {/*  className="note-state-option"*/}
          {/*  onClick={createOnStateOptionButtonClickHandler('Marked')}*/}
          {/*>*/}
          {/*  <Icon glyph="icon-annotation-status-marked" />*/}
          {/*  {t('option.state.marked')}*/}
          {/*</DataElementWrapper>*/}
          {/*<DataElementWrapper*/}
          {/*  dataElement="notePopupStateUnmarked"*/}
          {/*  className="note-state-option"*/}
          {/*  onClick={createOnStateOptionButtonClickHandler('Unmarked')}*/}
          {/*>*/}
          {/*  <Icon glyph="icon-annotation-status-unmarked" />*/}
          {/*  {t('option.state.unmarked')}*/}
          {/*</DataElementWrapper>*/}
        </DataElementWrapper>
      </div>
    </PopupPortal>
  );
};

NoteStatePopup.propTypes = propTypes;

export default NoteStatePopup;