import React, { BaseSyntheticEvent, useState } from 'react';

import { Div, Space, Span, P } from 'components/Styles';
import ToolTip from 'components/Tooltip';
import { GreenIndicator, UL, LI, WorkspaceItemWrapper } from './styles/style';
import RenderIf from 'components/RenderIf';
import { Add, Profile, Settings, Unbird } from 'components/Icons';
import Select, { OptionProps } from 'components/Select';
import Dropdown from 'components/Dropdown';
import DropDownNavItem from './NavItem';
import CompanyLogoWithUsername from './CompanyLogoWithUserName';
import { Color } from 'lib/themes/interface';

interface INavListItems {
  name: string;
  items: {
    name: string;
    id: string;
    icon: any;
  }[]
  id: string;
}

interface ICurrentAccount {
  workspace: string;
  email: string;
}

const SideNavItems = ({ shrinkSidebar, navList }: { shrinkSidebar: boolean, navList: INavListItems[] }) => {
  const [activeState, setActiveState] = useState('dashboard');

  const collapseNavList = navList.reduce((acc, curr, i, arr) => {
    let newAcc = [...acc, { name: curr.name, header: true, id: curr.id }];
    if (curr.items) {
      newAcc = newAcc.concat(curr.items);
    }

    return newAcc;
  }, []);

  return (
    <UL>
      {collapseNavList.map(({ name, id, icon, header }, index) => {
        if (header) {
          return (
            <LI key={id} marginAttr={shrinkSidebar && '0 auto'}>
              <Space height={index === 0 ? '32px' : '40px'} />
              <P fontWeight="500" fontSize="12px">
                {name}
              </P>
              <Space height="20px" />
            </LI>
          );
        }
        return (
          <LI key={id} marginAttr={shrinkSidebar && '0 auto'}>
            <Div
              display="flex"
              alignItems="center"
              className={`nav-item ${activeState === id ? 'active' : ''} ${
                shrinkSidebar && 'shrinked-view'
              }`}
              onClick={(e: BaseSyntheticEvent) => {
                setActiveState(id);
              }}
            >
              <RenderIf isTrue={!shrinkSidebar}>
                {icon(activeState === id ? '#18C1E0' : '#778594')}
              </RenderIf>
              <RenderIf isTrue={shrinkSidebar}>
                <ToolTip anchor="RIGHT_CENTER" text={name}>
                  {icon(activeState === id ? '#18C1E0' : '#778594')}
                </ToolTip>
              </RenderIf>
              <Div
                display={!shrinkSidebar ? 'block' : 'none '}
                id={id}
                key={id}
                marginLeft="22px"
              >
                {name}
              </Div>
            </Div>
          </LI>
        );
      })}
    </UL>
  );
};

const SideNav = ({ currentAccount, emails, workspaces, navList, shrinkSidebar }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const version = 'v2.0.13';

  return (
    <>
      <Div position="relative">
        <DropdownContainer
          component={
            <DropdownContent
              shrinkSidebar={shrinkSidebar}
              currentAccount={currentAccount}
            />
          }
          setShowDropdown={setShowDropdown}
          showDropdown={showDropdown}
          emails={emails}
          workspaces={workspaces}
          currentAccount={currentAccount}
        />
      </Div>
      <Div style={{ flex: '1 0 0' }}>
        <SideNavItems shrinkSidebar={shrinkSidebar} navList={navList} />
      </Div>
      <Div
        marginLeft={!shrinkSidebar && '32px'}
        display="flex"
        alignItems="center"
        marginBottom={!shrinkSidebar ? '27px' : '15px'}
      >
        <RenderIf isTrue={!shrinkSidebar}>
          <Unbird width="58" />
          <Span fontSize="12px" marginLeft="5px" marginTop="3px">
            {version}
          </Span>
        </RenderIf>
        <RenderIf isTrue={shrinkSidebar}>
          <Unbird width="40" height="22" viewBoxWidth="12" viewBoxHeight="33" />
          <Span fontSize="12px" marginTop="-10px">
            {version}
          </Span>
        </RenderIf>
      </Div>
    </>
  );
};

const DropdownContent = ({ shrinkSidebar, currentAccount }) => {
  return (
    <Div
      className="workspace-logo"
      display="flex"
      alignItems="center"
      justifyContent={shrinkSidebar && 'center'}
      padding="16px 32px"
      cursor="pointer"
    >
      <Div
        width="32px"
        height="32px"
        borderRadius="8px"
        backgroundColor="#F2CC78"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginRight={shrinkSidebar ? '0' : '10px'}
      >
        { CapitalizeFirstLetter(currentAccount.workspace) }
      </Div>
      <RenderIf isTrue={!shrinkSidebar}>
        <Span>{currentAccount.workspace}</Span>
      </RenderIf>
    </Div>
  )
};

const DropdownContainer = ({
  showDropdown,
  setShowDropdown,
  emails,
  workspaces,
  currentAccount,
  component,
}: {
  showDropdown: boolean;
  setShowDropdown: (boolean) => void;
  emails: OptionProps[];
  workspaces: { name: string, icon?: any }[];
  currentAccount: ICurrentAccount;
  component: any;
}) => {
  return (
    <Dropdown TopComponent={component}>
      <CompanyLogoWithUsername
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        currentAccount={currentAccount}
      />
      <Div width="192px" margin="0 auto">
        <Select onSelectChange={() => {}} options={emails} />
      </Div>
      <Space />
      <Div
        marginLeft="16px"
        marginBottom="16px"
        fontSize="12px"
        fontWeight="400"
      >
        {workspaces.map(({ name, icon }, i) => {
          return (
            <WorkspaceItemWrapper key={i}>
              <Div
                width="24px"
                height="24px"
                borderRadius="6px"
                backgroundColor={i === 0 ? "#D1F3F9" : "#E6E8EA"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginRight="10px"
                position="relative"
                className={i === 0 && 'active-workspace'}
              >
                { icon ? icon : CapitalizeFirstLetter(name) }
                <RenderIf isTrue={i === 0}>
                  <GreenIndicator />
                </RenderIf>
              </Div>
              <Span>{name}</Span>
            </WorkspaceItemWrapper>
          );
        })}
      </Div>
      <hr style={{ border: '.5px solid #DADDE0', transform: 'scaleY(0.5)' }} />
      <Div
        marginLeft="16px"
        marginBottom="16px"
        fontSize="10px"
        lineHeight="16px"
        color={Color.midnight0}
      >
        <DropDownNavItem icon={<Profile />} text="Add Account" />
        <DropDownNavItem
          icon={<Add width="12" fill="#778594" />}
          text="Join or Create workspace"
        />
        <DropDownNavItem
          icon={<Settings width="12" fill="#778594" />}
          text="Workspace Settings"
        />
      </Div>
    </Dropdown>
  );
};

const CapitalizeFirstLetter = (text: string) => {
  if (!text || !text.length) return '';
  return text[0]?.toUpperCase();
};

export default SideNav;
