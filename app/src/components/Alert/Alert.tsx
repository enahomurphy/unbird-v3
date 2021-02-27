import React, { FC, ReactElement } from 'react';
import Modal from 'components/Modal';
import RenderIf from 'components/RenderIf/RenderIf';
import { Div } from 'components/Styles';
import { IAlert } from './types';

interface AlertProps extends IAlert {
  close: () => void;
}

const Alert: FC<AlertProps> = ({
  title,
  invertedButtonText,
  rightButtonText,
  bodyText,
  close,
  isOpen,
  rightButtonAction,
  rightButtonBackground,
  width,
  height,
}): ReactElement => {
  const handleClose = () => {
    close();
  };

  const onRightButtonAction = () => {
    rightButtonAction();
    close();
  };

  return (
    <RenderIf isTrue={isOpen}>
      <Modal
        close={handleClose}
        width={width}
        height={height}
        headerText={title}
        rightButtonText={rightButtonText}
        rightButtonAction={onRightButtonAction}
        invertedButtonText={invertedButtonText}
        invertedButtonAction={handleClose}
        rightButtonBackground={rightButtonBackground}
      >
        <Div>{bodyText}</Div>
      </Modal>
    </RenderIf>
  );
};

Alert.defaultProps = {
  invertedButtonText: 'Cancel',
  isOpen: false,
};

export default Alert;
