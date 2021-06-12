import React, { ReactNode } from 'react';

import { Div, Space, Span } from 'components/Styles';
import { GreenIndicator, WorkspaceItemWrapper } from './styles/style';
import RenderIf from 'components/RenderIf';
import { Add, Profile, Settings } from 'components/Icons';
import Select, { OptionProps } from 'components/Select';
import Dropdown from 'components/Dropdown';
import DropDownNavItem from './NavItem';
import CompanyLogoWithUsername from './CompanyLogoWithUserName';
import Avatar from 'components/Avatar';
import { Color } from 'lib/themes/interface';

interface ICurrentAccount {
  workspace: string;
  email: string;
}

export interface DropdownContentProps {
  shrinkSidebar: boolean;
  currentAccount: ICurrentAccount;
}

export interface DropdownContainerProps {
  showDropdown: boolean;
  setShowDropdown: (boolean) => void;
  emails: OptionProps[];
  workspaces: { name: string; icon?: any }[];
  currentAccount: ICurrentAccount;
  component: ReactNode;
}

export interface WorkspaceItemProps {
  icon: ReactNode;
  name: string;
  index: number;
}

export const DropdownContent = ({
  shrinkSidebar,
  currentAccount,
}: DropdownContentProps) => {
  return (
    <Div
      className="workspace-logo"
      display="flex"
      alignItems="center"
      justifyContent={shrinkSidebar && 'center'}
      padding="16px 32px"
      cursor="pointer"
    >
      <Div marginRight={shrinkSidebar ? '0' : '10px'}>
        <Avatar
          width="32px"
          initials={CapitalizeFirstLetter(currentAccount.workspace)}
          radius="8px"
          css={{ fontWeight: 400 }}
        />
      </Div>
      <RenderIf isTrue={!shrinkSidebar}>
        <Span>{currentAccount.workspace}</Span>
      </RenderIf>
    </Div>
  );
};

export const DropdownContainer = ({
  showDropdown,
  setShowDropdown,
  emails,
  workspaces,
  currentAccount,
  component,
}: DropdownContainerProps) => {
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
          return <WorkspaceItem icon={icon} name={name} index={i} key={name} />;
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

const WorkspaceItem = ({ icon, name, index }: WorkspaceItemProps) => {
  return (
    <WorkspaceItemWrapper>
      <Div
        width="24px"
        height="24px"
        borderRadius="6px"
        backgroundColor={index === 0 ? '#D1F3F9' : '#E6E8EA'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight="10px"
        position="relative"
        className={index === 0 && 'active-workspace'}
      >
        {icon ? icon : CapitalizeFirstLetter(name)}
        <RenderIf isTrue={index === 0}>
          <GreenIndicator />
        </RenderIf>
      </Div>
      <Span>{name}</Span>
    </WorkspaceItemWrapper>
  );
};

const CapitalizeFirstLetter = (text: string) => {
  if (!text || !text.length) return '';
  return text[0]?.toUpperCase();
};

export default DropdownContainer;
