import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export interface ModalHistory {
  push: (modalName: string, params?: Record<string, string>) => void;
  isModalOpen: (modalName: string) => boolean;
}

export const useModalHistory = (): ModalHistory => {
  const history = useHistory();

  const push = useCallback(
    (name: string, params: Record<string, string> = {}) => {
      const qs = new URLSearchParams({ ...params, modal: name });
      history.push(`${history.location.pathname}?${qs.toString()}`);
    },
    [history]
  );

  const isModalOpen = (modalName: string): boolean => {
    const qs = new URLSearchParams(
      decodeURIComponent(history.location?.search)
    );

    return qs.has(modalName);
  };

  return { push, isModalOpen };
};

export const getState = (url: string): Record<string, string> => {
  const qs = new URLSearchParams(decodeURIComponent(url));
  if (qs.has('state')) {
    return JSON.parse(qs.get('state'));
  }

  return {};
};

export const useGetState = (): (() => Record<string, string>) => {
  const history = useHistory();

  return () => {
    return getState(history.location?.search);
  };
};

export default { useModalHistory };
