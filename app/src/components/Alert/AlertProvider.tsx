import React, { FC, ReactElement } from 'react';
import Alert from './Alert';
import { IAlert } from './types';

const initialState = {
  isOpen: false,
  title: '',
  invertedButtonText: 'Cancel',
  rightButtonText: '',
  bodyText: '',
  rightButtonAction: () => {},
  rightButtonBackground: '',
  width: '440px',
  height: 'auto',
};

export const alertContext = React.createContext<React.Dispatch<IAlert>>(
  undefined
);

const { Provider } = alertContext;

interface AlertProviderProps {
  children?: React.ReactNode;
}

const AlertProvider: FC<AlertProviderProps> = ({ children }): ReactElement => {
  const [alertState, setAlertState] = React.useState<IAlert>(initialState);

  const alert = (props: IAlert): void => {
    setAlertState({ ...alertState, ...props, isOpen: true });
  };

  const close = () => {
    setAlertState(initialState);
  };

  return (
    <>
      <Provider value={alert}>{children}</Provider>
      <Alert
        isOpen={alertState.isOpen}
        title={alertState.title}
        invertedButtonText={alertState.invertedButtonText}
        rightButtonText={alertState.rightButtonText}
        bodyText={alertState.bodyText}
        rightButtonAction={alertState.rightButtonAction}
        rightButtonBackground={alertState.rightButtonBackground}
        close={close}
        width={alertState.width}
        height={alertState.height}
      />
    </>
  );
};

export default AlertProvider;
