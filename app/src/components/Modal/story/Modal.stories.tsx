import React, { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Div } from 'components/Styles';
import Modal, { ModalProps } from '..';

const ModalComponent: Story<ModalProps> = ({
  width,
  height,
  headerText,
  close,
  invertedButtonText,
  invertedButtonIcon,
  invertedButtonAction,
  rightButtonText,
  rightButtonIcon,
  rightButtonAction,
  leftButtonText,
  leftButtonIcon,
  leftButtonAction,
  fullscreen,
}): ReactElement => {
  return (
    <div style={{ display: 'flex', width: '500px', flexFlow: 'wrap' }}>
      <Modal
        fullscreen={fullscreen}
        width={width}
        height={height}
        headerText={headerText}
        close={close}
        invertedButtonText={invertedButtonText}
        invertedButtonIcon={invertedButtonIcon}
        invertedButtonAction={invertedButtonAction}
        rightButtonText={rightButtonText}
        rightButtonIcon={rightButtonIcon}
        rightButtonAction={rightButtonAction}
        leftButtonText={leftButtonText}
        leftButtonIcon={leftButtonIcon}
        leftButtonAction={leftButtonAction}
      >
        <Div
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <h1>Hello world</h1>
        </Div>
      </Modal>
    </div>
  );
};

export const ModalWithTwoButtons = ModalComponent.bind({});

ModalWithTwoButtons.args = {
  width: '440px',
  height: '750px',
  headerText: 'New Direct Message',
  body: <h1>Hello world</h1>,
  close: () => {},
  rightButtonText: 'Delete',
  rightButtonAction: () => {},
  invertedButtonText: 'Cancel',
  invertedButtonAction: () => {},
  fullscreen: false,
};

export const ModalWithThreeButtonsWithIcon = ModalComponent.bind({});

ModalWithThreeButtonsWithIcon.args = {
  width: '440px',
  height: '750px',
  headerText: 'New Direct Message',
  body: <h1>Hello world</h1>,
  close: () => {},
  rightButtonText: 'Delete',
  rightButtonIcon: 'Trash',
  rightButtonAction: () => {},
  invertedButtonText: 'Cancel',
  invertedButtonAction: () => {},
  leftButtonText: 'End',
  leftButtonIcon: 'Archive',
  leftButtonAction: () => {},
  fullscreen: false,
};

export const ModalWithTwoButtonsWithIcon = ModalComponent.bind({});

ModalWithTwoButtonsWithIcon.args = {
  width: '440px',
  height: '750px',
  headerText: 'New Direct Message',
  body: <h1>Hello world</h1>,
  close: () => {},
  rightButtonText: 'Delete',
  rightButtonIcon: 'Archive',
  rightButtonAction: () => {},
  invertedButtonText: 'Cancel',
  invertedButtonAction: () => {},
  fullscreen: false,
};

export const ModalWithOneButton = ModalComponent.bind({});

ModalWithOneButton.args = {
  width: '440px',
  height: '750px',
  headerText: 'New Direct Message',
  body: <h1>Hello world</h1>,
  close: () => {},
  rightButtonText: 'Cancel',
  rightButtonAction: () => {},
  fullscreen: false,
};

export const FullscreenModal = ModalComponent.bind({});

FullscreenModal.args = {
  width: '440px',
  height: '750px',
  headerText: 'New Direct Message',
  fullscreen: true,
  body: <h1>Hello world</h1>,
  close: () => {},
  leftButtonText: 'Cancel',
  leftButtonAction: () => {},
  rightButtonText: 'Cancel',
  rightButtonAction: () => {},
};

export default {
  title: 'Unbird/Modal',
  component: Modal,
  argTypes: {},
} as Meta;
