import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { List } from 'react-virtualized';

import { useSharedBindKey } from 'lib/hooks/useBindKeys';
import { Prompt } from 'react-router-dom';
import ListItem from './ListItem';
import { listStyles } from './styles';

export interface RowProps {
  index: number;
  style: React.CSSProperties;
  isActive: boolean;
}

export interface ListProps {
  width: number;
  height: number;
  length: number;
  rowHeight: number;
  actionOnNavigate?: boolean;
  passedIndex?: number;
  onRenderRow: (RowProps: RowProps) => ReactElement;
  onEnter: (index: number) => void;
  onReachEnd?: () => void;
  listType?: 'messages' | 'search';
  zIndex?: number;
  cycleOnNav?: boolean;
  ignoreIndex?: boolean;
}

let lastScrollPosition;
const VirtualList: FC<ListProps> = ({
  onEnter,
  onRenderRow,
  onReachEnd,
  actionOnNavigate = false,
  length,
  width,
  height,
  rowHeight,
  listType,
  passedIndex = 0,
  zIndex = 0,
  cycleOnNav = true,
  ignoreIndex = false,
}): ReactElement => {
  const listRef = useRef<List>();
  const scrollPositionRef = useRef<number>();

  const [activeIndex, setActive] = useState<number>(passedIndex);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (ignoreIndex && listType === 'messages') {
      listRef.current.scrollToPosition(lastScrollPosition);
      if (!loaded) setLoaded(true);
    } else if (passedIndex === -1) {
      listRef.current.scrollToRow(length);
      if (!loaded) setLoaded(true);
    } else {
      listRef.current.scrollToRow(passedIndex);
      setActive(passedIndex);
    }
  }, [setActive, passedIndex, length, loaded, ignoreIndex, listType]);

  useSharedBindKey(
    'down',
    () => {
      let index;
      setActive((previousIndex) => {
        if (length === 0) return 0;
        const onEndIndx = cycleOnNav ? 0 : previousIndex;
        index = previousIndex === length - 1 ? onEndIndx : previousIndex + 1;
        return index;
      });
      listRef.current.scrollToRow(index);
      if (actionOnNavigate) onEnter(index);
    },
    zIndex,
    false,
    listType
  );

  useSharedBindKey(
    'up',
    () => {
      let index;
      setActive((previousIndex) => {
        if (length === 0) return 0;
        const onEndIndx = cycleOnNav ? length - 1 : previousIndex;
        index = previousIndex === 0 ? onEndIndx : previousIndex - 1;
        return index;
      });
      listRef.current.scrollToRow(index);
      if (actionOnNavigate) onEnter(index);
    },
    zIndex,
    false,
    listType
  );

  useSharedBindKey(
    'enter',
    () => {
      onEnter(activeIndex);
    },
    zIndex,
    false,
    listType
  );

  return (
    <>
      <Prompt
        message={(location) => {
          if (
            listType === 'messages' &&
            location?.pathname?.indexOf('thread') !== -1
          ) {
            lastScrollPosition = scrollPositionRef.current;
          }
          return true;
        }}
      />
      <List
        ref={listRef}
        css={listStyles}
        width={width}
        height={height}
        rowCount={length}
        rowHeight={rowHeight}
        rowRenderer={(props) => {
          const isActive = activeIndex === props.index;
          return (
            <ListItem
              key={props.key}
              style={props.style}
              onMouseOver={() => {
                setActive(props.index);
              }}
              onClick={() => {
                setActive(props.index);
              }}
            >
              {onRenderRow({ ...props, isActive })}
            </ListItem>
          );
        }}
        onScroll={({ scrollTop }): void => {
          scrollPositionRef.current = scrollTop;
          if (loaded && scrollTop === 0 && onReachEnd) {
            onReachEnd();
          }
        }}
      />
    </>
  );
};

export default VirtualList;
