import React from 'react';

import { Div } from 'components/Styles';
import { Notification, Power, Settings, Shrinker } from 'components/Icons';
import Dropdown from 'components/Dropdown';
import { Color } from 'lib/themes/interface';
import RenderIf from 'components/RenderIf';
import Avatar from 'components/Avatar';
import { Header, LogoutWrapper, SettingsIconWrapper } from './styles';

export interface NavHeader {
  shrinkSidebar: boolean;
  setShrinkSidebar: (boolean) => void;
  setShowUserDropdown: (boolean) => void;
  showUserDropdown: boolean;
  userInfo: {
    email: string;
    name: string;
    image?: string;
  }
}

const NavHeader = ({
  setShrinkSidebar,
  shrinkSidebar,
  setShowUserDropdown,
  showUserDropdown,
  userInfo
}: NavHeader) => {
  return (
    <Header>
      <Div
        marginLeft="40px"
        onClick={() => {
          setShrinkSidebar(!shrinkSidebar);
        }}
        cursor="pointer"
      >
        <Shrinker />
      </Div>
      <Div display="flex">
        <Div position="relative" marginTop="10px">
          <Div>
            <Notification />
          </Div>
          <RenderIf isTrue={true}>
            <Div
              position="absolute"
              width="24px"
              height="24px"
              background="#FEE3E3"
              top="-15px"
              left="8px"
              borderRadius="8px"
              fontSize="12px"
              fontWeight="700"
              padding="6px 5px"
              color={Color.red0}
            >
              12
            </Div>
          </RenderIf>
        </Div>
        <Div
          width="32px"
          height="32px"
          borderRadius="8px"
          marginRight="24px"
          marginLeft="31px"
          position="relative"
          cursor="pointer"
          onClick={() => {
            setShowUserDropdown(!showUserDropdown);
          }}
        >
          <Dropdown
            width="167px"
            TopComponent={
              <Avatar
                src={userInfo.image}
                width="32px"
                initials=""
                radius="8px"
              />
            }
            top="55px"
            right="-8px"
            minHeight="100px"
            left=""
          >
            <Div
              display="flex"
              fontSize="10px"
              padding="16px"
              justifyContent="space-between"
              lineHeight="16px"
            >
              <Div fontWeight="500">
                <Div>{userInfo.name}</Div>
                <Div>{userInfo.email}</Div>
              </Div>
              <SettingsIconWrapper>
                <Settings width="12" fill="#778594" />
              </SettingsIconWrapper>
            </Div>
            <hr
              style={{
                border: '.5px solid #DADDE0',
                transform: 'scaleY(0.5)',
                margin: 0,
              }}
            />
            <LogoutWrapper>
              <Power />
              <Div marginLeft="11px" lineHeight="16px" marginTop="2px">
                Log out
              </Div>
            </LogoutWrapper>
          </Dropdown>
        </Div>
      </Div>
    </Header>
  );
};

export default NavHeader;
