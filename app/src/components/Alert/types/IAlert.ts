export interface IAlert {
  isOpen?: boolean;
  title: string;
  invertedButtonText?: string;
  rightButtonText: string;
  bodyText: string | React.ReactNode;
  rightButtonAction: () => void;
  rightButtonBackground?: string;
  width?: string;
  height?: string;
}
