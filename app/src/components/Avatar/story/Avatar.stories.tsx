import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Div } from 'components/Styles';
import Avatar, { AvatarProps } from '../Avatar';

const Template: Story<{ data: AvatarProps[] }> = ({ data }) => {
  return (
    <div style={{ display: 'flex' }}>
      {data.map(({ src, radius, width, initials }) => {
        return (
          <Div padding="12px" key={src}>
            <Avatar
              src={src}
              radius={radius}
              width={width}
              initials={initials}
            />
          </Div>
        );
      })}
    </div>
  );
};

export const AvatarInitials = Template.bind({});

AvatarInitials.args = {
  data: [
    {
      width: '50px',
      initials: 'P',
    },
    {
      width: '70px',
      initials: 'D',
    },
    {
      width: '100px',
      initials: 'L',
    },
  ],
};

export const AvatarVideo = Template.bind({});

AvatarVideo.args = {
  data: [
    {
      src:
        'https://cdn.girbil.com/development/users/2496b67c-c092-4868-8335-3028a0831ce4/avatar.webm?1605744441493',
      width: '50px',
      initials: '',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/78.jpg',
      width: '100px',
      initials: '',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/76.jpg',
      width: '100px',
      initials: '',
    },
    {
      src:
        'https://cdn.girbil.com/development/users/2496b67c-c092-4868-8335-3028a0831ce4/avatar.webm?16057444414',
      width: '150px',
      initials: '',
    },
  ],
};

export default {
  title: 'Unbird/Avatar',
  component: Avatar,
} as Meta;
