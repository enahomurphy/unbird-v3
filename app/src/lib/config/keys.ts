export interface PusherConfig {
  pusherKey: string;
  pusherCluster: string;
}

export interface ConfigKeys {
  mediaServer: string;
  apiUrl: string;
  appEnv: string;
  pusher: PusherConfig;
  segment: string;
  nodeEnv: string;
  protocol?: string;
  optimizely: string;
  social: {
    google: {
      clientId: string;
      redirectUri: string;
    };
    microsoft: {
      clientId: string;
      redirectUri: string;
    };
  };
}

export const pusherConfig: PusherConfig = {
  pusherKey: process.env.PUSHER_KEY,
  pusherCluster: process.env.PUSHER_CLUSTER,
};

export const keys: ConfigKeys = {
  apiUrl:
    process.env.NODE_ENV === 'test'
      ? 'http://localhost:3000'
      : process.env.API_URL,
  webUrl: process.env.WEB_URL,
  appEnv: process.env.APP_ENV,
  pusher: pusherConfig,
  segment: process.env.SEGMENT_KEY,
  nodeEnv: process.env.NODE_ENV,
  optimizely: process.env.OPTIMIZELY_KEY,
  websiteUrl: process.env.WEBSITE_URL,
  social: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      redirectUri: process.env.GOOGLE_CALLBACK_URL,
    },
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID,
      redirectUri: process.env.MICROSOFT_CALLBACK_URL,
    },
  },
};

export default keys;
