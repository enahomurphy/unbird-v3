export const capitalizeFirstLetter = (text: string) => {
  if (!text || !text.length) return '';
  return text[0]?.toUpperCase();
};

export default capitalizeFirstLetter;
