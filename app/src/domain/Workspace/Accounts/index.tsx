import React, { useState } from 'react';

import { Main, Page } from 'components/Styles';
import {
  Document,
  Home,
  Inbox,
  Insight,
  Metrics,
  Plan,
  Settings,
  Scan,
  Tag,
  UnbirdLogo,
} from 'components/Icons';
import SideNav, { INavListItemsProps } from 'components/SideNav';
import { OptionProps } from 'components/Select';
import Navheader from 'components/NavHeader';
import { AsideWrapper } from './styles';

interface ICurrentAccount {
  workspace: string;
  email: string;
}

const Account = () => {
  const [showUserDropdown, setShowUserDropdown] = useState<boolean>(false);
  const [shrinkSidebar, setShrinkSidebar] = useState<boolean>(false);
  const userInfo = {
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    name: 'Lucy Albert',
    email: 'lucymail@unbird.com'
  };
  const [currentAccount] = useState<ICurrentAccount>({
    workspace: 'Unbird',
    email: 'lucymail@unbird.com',
  });
  const [emails] = useState<OptionProps[]>([
    { label: 'lucymail@unbird.com', value: 'lucymail@unbird.com' },
    { label: 'jane@doe.com', value: 'jane@doe.com' },
  ]);
  const [workspaces] = useState<{ name: string; icon?: any }[]>([
    { name: 'Unbird', icon: <UnbirdLogo width="14" viewBoxHeight="22" /> },
    { name: 'Ping Pong' },
    { name: 'Tsache & Tsache' },
  ]);

  const navList: INavListItemsProps[] = [
    {
      name: 'OVERVIEW',
      items: [
        {
          name: 'Dashboard',
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
          userInfo={userInfo}
        />
      </Main>
    </Page>
  );
};

export default Account;
