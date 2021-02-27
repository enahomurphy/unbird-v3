import React, { FC, ReactElement } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as Icons from 'components/Icons';
import { Div, P } from 'components/Styles';
import { Color } from 'lib/themes/interface';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const IconList: FC<Props> = ({ width, height, fill }): ReactElement => {
  return (
    <div style={{ display: 'flex', width: '500px', flexFlow: 'wrap' }}>
      {Object.keys(Icons).map((key: string) => {
        const Icon = Icons[key];
        return (
          <div
            style={{
              width: '150px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            key={key}
          >
            <Div margin="0 0 5px 0">
              <Icon width={width} height={height} fill={fill} />
            </Div>
            <P color={Color[fill]}>{key}</P>
          </div>
        );
      })}
    </div>
  );
};

const Template: Story<Props> = ({ width, height, fill }) => (
  <IconList width={width} height={height} fill={fill} />
);

export const Medium = Template.bind({});
Medium.args = {
  width: 18,
  height: 18,
  fill: 'white',
};

export const Large = Template.bind({});
Large.args = {
  width: 24,
  height: 24,
  fill: 'white',
};

export const Red = Template.bind({});
Red.args = {
  width: 24,
  height: 24,
  fill: 'red',
};

export const Green = Template.bind({});
Green.args = {
  width: 24,
  height: 24,
  fill: 'green',
};

export default {
  title: 'Unbird/Icons',
  component: IconList,
} as Meta;
