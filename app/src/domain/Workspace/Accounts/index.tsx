import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Div, Main, Page
} from 'components/Styles/Element';
import {
  Document,
  Home,
  Inbox,
  Insight,
  Metrics,
  Notification,
  Plan,
  Power,
  Settings,
  Shrinker,
  Scan,
  Tag,
  Unbird,
} from 'components/Icons';
import SideNav from 'components/SideNav';
import { Color } from 'lib/themes/interface';
import { OptionProps } from 'components/Select';
import RenderIf from 'components/RenderIf';
import { AsideWrapper, DropdownWrapper } from './styles'

const SettingsIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #D1F3F9;
    border-radius: 6px;
    svg > path {
      fill: #18C1E0;
    }
  }
`;

const LogoutWrapper = styled.div`
  font-size: 10px;
  display: flex;
  margin-left: 16px;
  margin-top: 7px;
  font-weight: 400;
  align-items :center;

  &:hover {
    svg > path {
      fill: #F87171;
    }
  }
`;

interface ICurrentAccount {
  workspace: string;
  email: string;
}

const Account = () => {
  const [showUserDropdown, setShowUserDropdown] = useState<boolean>(false);
  const [shrinkSidebar, setShrinkSidebar] = useState<boolean>(false);
  const [currentAccount] = useState<ICurrentAccount>({
    workspace: 'Unbird',
    email: 'lucymail@unbird.com'
  });
  const [emails] = useState<OptionProps[]>([
    { label: 'lucymail@unbird.com', value: 'lucymail@unbird.com' },
    { label: 'jane@doe.com', value: 'jane@doe.com' },
  ]);
  const [workspaces] = useState<{ name: string, icon?: any }[]>([
    { name: 'Unbird', icon: <Unbird
      width="40"
      height="22"
      viewBoxWidth="12"
      viewBoxHeight="33"
    /> },
    { name: 'Ping Pong' },
    { name: 'Tsache & Tsache' },
  ]);

  const navList = [
    {
      name: 'OVERVIEW',
      items: [
        {
          name: 'DashBoard',
          id: 'dashboard',
          icon: (fill) => <Home fill={fill} />,
        },
      ],
      id: 'container-1',
    },
    {
      name: 'INSIGHTS',
      id: 'container-2',
      items: [
        {
          name: 'Insights',
          id: 'insights',
          icon: (fill) => <Insight fill={fill} />,
        },
        {
          name: 'Metrics',
          id: 'metrics',
          icon: (fill) => <Metrics fill={fill} />,
        },
        {
          name: 'Reports',
          id: 'reports',
          icon: (fill) => <Document fill={fill} />,
        },
        { name: 'Inbox', id: 'inbox', icon: (fill) => <Inbox fill={fill} /> },
        { name: 'Plans', id: 'plans', icon: (fill) => <Plan fill={fill} /> },
        { name: 'Tags', id: 'tags', icon: (fill) => <Tag fill={fill} /> },
      ],
    },
    {
      name: 'MORE',
      id: 'container-3',
      items: [
        { name: 'Api', id: 'api', icon: (fill) => <Settings fill={fill} /> },
        {
          name: 'Security',
          id: 'security',
          icon: (fill) => <Scan fill={fill} />,
        },
      ],
    },
  ];

  return (
    <Page width="1440px" height="900px" display="flex">
      <AsideWrapper width={shrinkSidebar ? '104px' : '260px'}>
        <SideNav
          currentAccount={currentAccount}
          shrinkSidebar={shrinkSidebar}
          navList={navList}
          workspaces={workspaces}
          emails={emails}
        />
      </AsideWrapper>
      <Main width="100%">
        <Navheader
          setShowUserDropdown={setShowUserDropdown}
          setShrinkSidebar={setShrinkSidebar}
          showUserDropdown={showUserDropdown}
          shrinkSidebar={shrinkSidebar}
        />
      </Main>
    </Page>
  );
};

const Navheader = ({
  setShrinkSidebar,
  shrinkSidebar,
  setShowUserDropdown,
  showUserDropdown,
}: {
  shrinkSidebar: boolean;
  setShrinkSidebar: (boolean) => void;
  setShowUserDropdown: (boolean) => void;
  showUserDropdown: boolean;
}) => {
  return (
    <header
      style={{
        height: 64,
        borderLeft: 'none',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
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
          backgroundColor="#F2CC78"
          padding="8px 10px"
          marginRight="24px"
          marginLeft="31px"
          position="relative"
          cursor="pointer"
          onClick={() => {
            setShowUserDropdown(!showUserDropdown);
          }}
        >
          U
          <DropdownWrapper width="167px" showDropdown={showUserDropdown} top="55px" right="-8px" minHeight="100px">
            <Div
              display="flex"
              fontSize="10px"
              padding="16px"
              justifyContent="space-between"
              lineHeight="16px"
            >
              <Div fontWeight="500">
                <Div>Lucy Albert</Div>
                <Div>lucymail@unbird.com</Div>
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
          </DropdownWrapper>
        </Div>
      </Div>
    </header>
  );
};

export default Account;
