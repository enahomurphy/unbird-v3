import React from 'react';
import Pusher from 'pusher-js';

import { pusherContext } from '../Pusher';

export const usePusher = (): Pusher => {
  const { socket } = React.useContext(pusherContext);

  return socket;
};

export default usePusher;
