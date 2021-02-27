export const getArrowTranslate = (layerSide: string): string => {
  let x = '-50%';
  let y = '0';

  const OFFSET = 3.5;
  if (layerSide === 'left') {
    x = `${-OFFSET}px`;
    y = '-50%';
  } else if (layerSide === 'right') {
    x = `${OFFSET}px`;
    y = '-50%';
  }

  const rotation = {
    top: 180,
    right: -90,
    left: 90,
    bottom: 0,
  };

  return `translate(${x}, ${y}) rotate(${rotation[layerSide]}deg)`;
};

export default { getArrowTranslate };
