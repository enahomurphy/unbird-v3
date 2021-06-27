import React, { FC, ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  AnchorEnum,
  RenderLayerProps,
  ToggleLayer,
  useHover,
} from 'react-laag';
import { Arrow } from 'components/Icons';
import { getArrowTranslate } from 'lib/styles';
import { TooltipBox, TooltipText } from './styles/Tooltip.styles';

interface TooltipProps {
  text: string;
  anchor?: AnchorEnum;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  text,
  anchor = 'TOP_CENTER',
}): ReactElement => {
  const [show, hoverProps] = useHover({ delayEnter: 300, delayLeave: 200 });

  return (
    <ToggleLayer
      isOpen={show}
      fixed
      placement={{ anchor, autoAdjust: true, triggerOffset: 29 }}
      renderLayer={({
        isOpen,
        layerProps,
        layerSide,
        arrowStyle,
      }: RenderLayerProps) => {
        return (
          <AnimatePresence>
            {isOpen && text && text !== '' && (
              <TooltipBox
                ref={layerProps.ref}
                style={layerProps.style}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: layerSide === 'top' ? -8 : 8,
                }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: layerSide === 'top' ? -8 : 8,
                }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 500,
                }}
              >
                {text}
                <Arrow
                  style={{
                    ...arrowStyle,
                    transform: getArrowTranslate(layerSide),
                  }}
                />
              </TooltipBox>
            )}
          </AnimatePresence>
        );
      }}
    >
      {({ triggerRef }) => (
        <TooltipText
          onMouseEnter={hoverProps.onMouseEnter}
          onMouseLeave={hoverProps.onMouseLeave}
          onTouchStart={hoverProps.onTouchStart}
          onTouchMove={hoverProps.onTouchMove}
          onTouchEnd={hoverProps.onTouchEnd}
          ref={triggerRef}
        >
          {children}
        </TooltipText>
      )}
    </ToggleLayer>
  );
};

export default Tooltip;
