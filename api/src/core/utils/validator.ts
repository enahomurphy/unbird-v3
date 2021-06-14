export const isPOJO = (obj): boolean => {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
};

export const isJSON = (data: unknown): boolean => {
  try {
    JSON.parse(data as string);

    return true;
  } catch (error) {
    return false;
  }
};
