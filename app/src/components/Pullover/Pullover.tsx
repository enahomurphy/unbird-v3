import React, { FC, ReactElement, useState } from 'react';
import { AnchorEnum, RenderLayerProps, ToggleLayer } from 'react-laag';
import { AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import ResizeObserver from 'resize-observer-polyfill';
import { Arrow } from 'components/Icons';
import { getArrowTranslate } from 'lib/styles';
import { Div } from 'components/Styles';

import { Color } from 'lib/themes/interface';
import { useSharedBindKey } from 'lib/hooks';
import { useHistory } from 'react-router-dom';
import RenderIf from 'components/RenderIf';
import MenuItem from './MenuItem';
import { MenuBase, PopoverOverlay } from './styles';

const outTransform = {
  top: { x: 0, y: -20 },
  left: { x: -20, y: 0 },
  bottom: { x: 0, y: 20 },
  right: { x: 20, y: 0 },
};

export interface PulloverProps {
  onItemClicked: (index: number) => void;
  onEnter?: (index: number) => void;
  renderRow: (index: number) => ReactElement;
  name?: string;
  anchor?: AnchorEnum;
  rowHeight?: string;
  dark?: boolean;
  hoverItemBackground?: string;
  hoverItemColor?: string;
  withOverlay?: boolean;
  closeOnClick?: boolean;
  passedSelectedIndex?: number;
  size: number;
  id?: string;
  hideArrow?: boolean;
}

const Pullover: FC<PulloverProps> = ({
  children,
  onItemClicked,
  size,
  dark = false,
  renderRow,
  rowHeight,
  hoverItemBackground,
  hoverItemColor,
  passedSelectedIndex = 0,
  closeOnClick = true,
  withOverlay = true,
  onEnter = onItemClicked,
  anchor = 'BOTTOM_CENTER',
  name = 'PULLOVER',
  id = 'pullover',
  hideArrow = false,
}): ReactElement => {
  const history = useHistory();
  const [activeIndex, setActive] = useState<number>(passedSelectedIndex);
  const [isPullOverOpen, setIsPullOverOpen] = useState<boolean>(false);

  useSharedBindKey(
    'down',
    () => {
      let index;
      setActive((previousIndex) => {
        index = previousIndex === size - 1 ? 0 : previousIndex + 1;
        return index;
      });
    },
    0,
    isPullOverOpen,
    name
  );

  useSharedBindKey(
    'up',
    () => {
      let index;
      setActive((previousIndex) => {
        index = previousIndex === 0 ? size - 1 : previousIndex - 1;
        return index;
      });
    },
    0,
    isPullOverOpen,
    name
  );

  useSharedBindKey(
    'enter',
    () => {
      onEnter(activeIndex);
      if (closeOnClick) {
        setIsPullOverOpen(false);
        history.replace(history.location.pathname);
      }
    },
    0,
    isPullOverOpen,
    name
  );

  useSharedBindKey(
    'esc',
    () => {
      history.replace(history.location.pathname);
    },
    0,
    isPullOverOpen,
    name
  );

  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      placement={{
        anchor,
        autoAdjust: true,
        triggerOffset: 4,
      }}
      renderLayer={({
        layerSide,
        arrowStyle,
        close,
        layerProps,
        isOpen,
      }: RenderLayerProps) => {
        const handleExit = () => {
          setIsPullOverOpen(false);
          close();
        };
        return (
          <AnimatePresence>
            {isOpen ? (
              <>
                {withOverlay && <PopoverOverlay onClick={handleExit} />}
                <MenuBase
                  id={id}
                  dark={dark}
                  ref={layerProps.ref}
                  style={layerProps.style}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    ...outTransform[layerSide],
                  }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, ...outTransform[layerSide] }}
                  transition={{
                    type: 'spring',
                    stiffness: 800,
                    damping: 35,
                  }}
                >
                  {Array(size)
                    .fill(1)
                    .map((_, index) => (
                      <MenuItem
                        key={nanoid()}
                        isSelected={activeIndex === index}
                        onMouseOver={() => {
                          setActive(index);
                        }}
                        itemHeight={rowHeight}
                        hoverBackground={hoverItemBackground}
                        hoverColor={hoverItemColor}
                        onClick={(e) => {
                          e.stopPropagation();
                          onItemClicked(index);
                          if (closeOnClick) handleExit();
                        }}
                      >
                        {renderRow(index)}
                      </MenuItem>
                    ))}
                  <RenderIf isTrue={!hideArrow && size > 0}>
                    <Arrow
                      fill={dark ? Color.transparent : Color.white}
                      style={{
                        ...arrowStyle,
                        position: 'absolute',
                        transformOrigin: 'center',
                        transform: getArrowTranslate(layerSide),
                      }}
                    />
                  </RenderIf>
                </MenuBase>
              </>
            ) : null}
          </AnimatePresence>
        );
      }}
    >
      {({ triggerRef, open, isOpen, close }) => {
        const unListen = history.listen(() => {
          if (isOpen) {
            setIsPullOverOpen(false);
            close();
          }
          unListen();
        });

        const toggle = (e) => {
          if (isOpen) {
            setIsPullOverOpen(false);
            close();
          } else {
            e.stopPropagation();
            setIsPullOverOpen(true);
            open();
          }
        };

        return (
          <Div
            height="fit-content"
            cursor="pointer"
            role="presentation"
            className="foo"
            onClick={toggle}
            ref={triggerRef}
          >
            {React.cloneElement(children as ReactElement, {
              isPulloverActive: isOpen,
              className: isOpen ? 'pullover_active' : 'pullover_inactive',
            })}
          </Div>
        );
      }}
    </ToggleLayer>
  );
};

export default Pullover;
