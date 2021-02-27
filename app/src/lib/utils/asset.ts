import keys from 'lib/config/keys';

export const assetPath = (path: string): string => {
  return `/public/${path}`;
};

export default assetPath;
