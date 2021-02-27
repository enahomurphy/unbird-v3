import React from 'react';
import { IAlert } from '../types';

import { alertContext } from '../AlertProvider';

const useAlert = (): React.Dispatch<IAlert> => {
  const alert = React.useContext(alertContext);

  return alert;
};

export default useAlert;
