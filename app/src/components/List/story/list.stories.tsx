import React, { FC, ReactElement, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { nanoid } from 'nanoid';
import { Div, P } from 'components/Styles';

import { Color } from 'lib/themes/interface';
import { Button } from 'components/Buttons';
import List, { ListProps, RowProps } from '../List';

interface ItemInterface {
  title: string;
  id: string;
}

const useList = (): [ItemInterface[], (string) => void] => {
  const [items, setItems] = useState<ItemInterface[]>(
    Array(100)
      .fill(1)
      .map<ItemInterface>(() => ({
        id: nanoid(),
        title: 'ehh',
      }))
  );

  const deleteData = (id: string): void => {
    setItems(items.filter((item) => id !== item.id));
  };

  return [items, deleteData];
};

const VirtualList: FC<ListProps> = ({
  onEnter,
  onRenderRow,
  length,
  width,
  height,
  rowHeight,
}): ReactElement => {
  return (
    <div style={{ display: 'flex', width: '500px', flexFlow: 'wrap' }}>
      <List
        rowHeight={rowHeight}
        width={width}
        height={height}
        onEnter={onEnter}
        length={length}
        onRenderRow={onRenderRow}
      />
    </div>
  );
};

const Template: Story<ListProps> = () => {
  const [items, deleteData] = useList();

  const onRenderRow = (props: RowProps): ReactElement => {
    return (
      <Div
        backgroundColor={props.isActive ? Color.primary : 'transparent'}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        color={props.isActive ? Color.white : Color.black}
      >
        <P>{items[props.index].id}</P>
        <Button onClick={() => deleteData(items[props.index].id)}>
          delete
        </Button>
      </Div>
    );
  };

  return (
    <VirtualList
      rowHeight={40}
      width={300}
      height={700}
      onEnter={(index) => {
        // eslint-disable-next-line no-console
        console.log(items[index]);
      }}
      onRenderRow={onRenderRow}
      length={items.length}
    />
  );
};

export const UnbirdList = Template.bind({});

UnbirdList.args = {
  data: Array(1000)
    .fill(1)
    .map(() => ({ title: 'ehh', members: '2' })),
};

export default {
  title: 'Unbird/List',
  component: List,
} as Meta;
