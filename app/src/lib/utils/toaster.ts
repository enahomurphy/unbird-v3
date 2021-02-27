import { toast, Slide } from 'react-toastify';

export const topToast = (text: string): void => {
  toast(text, {
    position: toast.POSITION.TOP_CENTER,
    type: toast.TYPE.DEFAULT,
    hideProgressBar: true,
    transition: Slide,
    autoClose: 3000,
    closeOnClick: true,
  });
};

export const sideToast = (text: string, type: string): void => {
  toast(text, {
    position: toast.POSITION.BOTTOM_LEFT,
    type: toast.TYPE[type?.toUpperCase()],
    hideProgressBar: true,
    transition: Slide,
    autoClose: 3000,
    closeOnClick: true,
    closeButton: false,
  });
};
