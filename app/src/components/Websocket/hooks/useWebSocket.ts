import { useContext } from 'react';
import { Socket } from 'socket.io-client';

import { websocketContext } from '../WebSocket';

export const useWebSocket = (): Socket => {
  const { socket } = useContext(websocketContext);

  return socket;
};

export default useWebSocket;
