import React, { FC, ReactElement, useState } from 'react';

import { storage } from 'lib/utils';
import Pusher from 'pusher-js';
import { keys } from 'lib/config';

let socket: Pusher;

export { Pusher };

export interface IPusherProvider {
  socket?: Pusher;
  reconnect: () => void;
}

export const pusherContext = React.createContext<IPusherProvider>({
  socket: null,
  reconnect: () => {},
});

export const init = (): Pusher => {
  if (!storage.payload) {
    return null;
  }

  if (socket) return socket;

  const pusher = new Pusher(process.env.PUSHER_KEY, {
    cluster: keys.pusher.pusherCluster,
    authEndpoint: `${keys.apiUrl}/socket/auth`,
    auth: {
      headers: {
        Authorization: `Bearer ${storage.token}`,
      },
    },
  });

  return pusher;
};

interface PusherProviderProps {
  children?: React.ReactNode;
}

const { Provider } = pusherContext;

export const PusherProvider: FC<PusherProviderProps> = ({
  children,
}): ReactElement => {
  const [connection, setSocket] = useState<Pusher>(init());

  const reconnect = () => {
    let pusher = connection;

    if (!pusher) {
      pusher = init();
      setSocket(pusher);
    } else {
      pusher.channels?.disconnect();
      Object.keys(pusher.channels?.channels).forEach((channel) => {
        pusher.unsubscribe(pusher.channels?.channels[channel].name);
      });
      pusher?.disconnect();
      pusher.config.auth.headers = {
        Authorization: `Bearer ${storage.token}`,
      };

      pusher?.connect();
      setSocket(pusher);
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
