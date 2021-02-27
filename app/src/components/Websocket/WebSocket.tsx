import React, { FC, ReactElement, useState } from 'react';
import IO, { Socket } from 'socket.io-client';

import { storage } from 'lib/utils';

let socket: Socket;

export interface IWebsocketProvider {
  socket?: Socket;
  reconnect: () => void;
}

export const websocketContext = React.createContext<IWebsocketProvider>({
  socket: null,
  reconnect: () => {},
});

export const init = (): Socket => {
  if (!storage.payload) {
    return null;
  }

  if (socket && socket.connected) {
    return socket;
  }

  socket = IO(`${process.env.MEDIA_SERVER}`, {
    transports: ['websocket'],
    query: {
      authorization: `Bearer ${storage.token}`,
      media_env: process.env.APP_ENV,
    },
  });

  socket.on('reconnect', () => {
    socket.sendBuffer = [];
  });

  return socket;
};

interface WebsocketProviderProps {
  children?: React.ReactNode;
}

const { Provider } = websocketContext;

export const WebsocketProvider: FC<WebsocketProviderProps> = ({
  children,
}): ReactElement => {
  const [connection, setSocket] = useState<Socket>(init());

  const reconnect = () => {
    let ws = connection;

    if (!ws) {
      ws = init();
      setSocket(ws);
    } else {
      ws?.close();
      const query = {
        authorization: `Bearer ${storage.token}`,
        media_env: process.env.APP_ENV,
      };
      ws.io.opts.query = query;
      ws.query = query;
      ws?.connect();

      setSocket(ws);
    }
  };

  return (
    <>
      <Provider
        value={{
          socket: connection,
          reconnect,
        }}
      >
        {children}
      </Provider>
    </>
  );
};
