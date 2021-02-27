export const isImage = (url?: string): boolean => {
  if (!url) {
    return true;
  }

  const [parsedUrl] = url.split('?');

  const parts = parsedUrl.split('.');
  const ext = parts[parts.length - 1];
  const isWebm = ext === 'webm' || parts.length === 1;

  return !isWebm;
};

export default { isImage };
