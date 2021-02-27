import React, { FC, ReactElement, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickAway } from 'react-use';
import { Div, H1 } from 'components/Styles';
import { Button } from 'components/Buttons';
import { Color } from 'lib/themes/interface';
import { Close } from 'components/Icons';
import RenderIf from 'components/RenderIf';
import { useTheme } from 'styled-components';
import { useSharedBindKey } from 'lib/hooks';
import { ModalWrapper, ModalOverlay } from './styles';

export interface ModalProps {
  width?: string;
  height?: string;
  headerText?: string | React.ReactNode;
  children: ReactNode;
  leftButtonText?: string;
  leftButtonIcon?: string;
  leftButtonAction?: () => void;
  rightButtonBackground?: Color | string;
  rightButtonText?: string;
  rightButtonIcon?: string;
  rightButtonAction?: () => void;
  rightButtonDisabled?: boolean;
  invertedButtonText?: string;
  invertedButtonIcon?: string;
  invertedButtonAction?: () => void;
  close: () => void;
  exitByClickOut?: boolean;
  fullscreen?: boolean;
  bodyPadding?: string;
}

const Modal: FC<ModalProps> = ({
  width,
  height,
  headerText,
  children,
  fullscreen,
  close,
  leftButtonText,
  leftButtonIcon,
  leftButtonAction,
  rightButtonBackground = Color.primary,
  rightButtonText,
  rightButtonIcon,
  rightButtonAction,
  invertedButtonText = 'Cancel',
  invertedButtonIcon,
  invertedButtonAction,
  exitByClickOut,
  rightButtonDisabled,
  bodyPadding = '24px',
}): ReactElement => {
  const theme = useTheme();
  const modalRef = useRef();
  const modalZIndex = 2;
  const modalAltZIndex = 5;
  useClickAway(modalRef, () => {
    if (!exitByClickOut) return;
    close();
  });

  useSharedBindKey(
    'esc',
    () => {
      close();
    },
    modalZIndex,
    false,
    'MODAL'
  );

  useSharedBindKey(
    'enter',
    () => {
      if (rightButtonText && rightButtonAction) rightButtonAction();
    },
    modalAltZIndex,
    false,
    'MODAL'
  );

  return createPortal(
    <ModalOverlay fullscreen={fullscreen}>
      <ModalWrapper
        ref={modalRef}
        fullscreen={fullscreen}
        width={width}
        height={height}
      >
        <RenderIf isTrue={!fullscreen}>
          <Div
            padding="0px 24px"
            borderBottom="1px solid rgba(139, 150, 158, 0.5)"
            display="flex"
            alignItems="center"
            height="80px"
            justifyContent="space-between"
          >
            <RenderIf isTrue={typeof headerText === 'string'}>
              <H1 fontSize="24px" fontWeight="normal">
                {headerText}
              </H1>
            </RenderIf>
            <RenderIf isTrue={typeof headerText !== 'string'}>
              {headerText}
            </RenderIf>
            <Div onClick={close} cursor="pointer">
              <Close />
            </Div>
          </Div>
        </RenderIf>
        <RenderIf isTrue={fullscreen}>
          <Div
            onClick={close}
            position="absolute"
            top="28px"
            left="28px"
            cursor="pointer"
            zIndex={modalZIndex + 2}
          >
            <Close />
          </Div>
        </RenderIf>
        <Div
          height={fullscreen ? '100%' : 'calc(100% - 142px)'}
          padding={bodyPadding}
          overflow="hidden"
        >
          {children}
        </Div>
        <RenderIf isTrue={!fullscreen}>
          <Div
            height="62px"
            display="flex"
            alignItems="center"
            borderTop="1px solid rgba(139, 150, 158, 0.5)"
            justifyContent={leftButtonText ? 'space-between' : 'flex-end'}
            padding="0 24px"
          >
            <RenderIf isTrue={Boolean(leftButtonText && leftButtonAction)}>
              <Button
                iconSize={18}
                background={Color.white}
                borderRadius="6px"
                color={Color.licorice}
                iconColor={Color.licorice}
                icon={leftButtonIcon}
                onClick={() => leftButtonAction()}
              >
                {leftButtonText}
              </Button>
            </RenderIf>

            <Div display="flex" alignItems="center">
              <RenderIf
                isTrue={Boolean(invertedButtonText && invertedButtonAction)}
              >
                <Button
                  onClick={invertedButtonAction}
                  iconSize={18}
                  icon={invertedButtonIcon}
                  color={Color.tiara}
                  iconColor={Color.tiara}
                  inverse
                  borderRadius="6px"
                  background={theme.colors.tiara}
                >
                  {invertedButtonText}
                </Button>
              </RenderIf>
              <RenderIf isTrue={Boolean(rightButtonText && rightButtonAction)}>
                <Div marginLeft="8px">
                  <Button
                    onClick={rightButtonAction}
                    iconSize={18}
                    icon={rightButtonIcon}
                    disabled={rightButtonDisabled}
                    borderRadius="6px"
                    background={rightButtonBackground || Color.primary}
                    iconColor={Color.white}
                  >
                    {rightButtonText}
                  </Button>
                </Div>
              </RenderIf>
            </Div>
          </Div>
        </RenderIf>
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

Modal.defaultProps = {
  exitByClickOut: true,
};

export default Modal;
