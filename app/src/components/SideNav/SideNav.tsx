import React, { BaseSyntheticEvent, useState } from 'react';

import { Div, Space, Span, P } from 'components/Styles';
import ToolTip from 'components/Tooltip';
import { UL, LI } from './styles/style';
import RenderIf from 'components/RenderIf';
import { Unbird } from 'components/Icons';
import { DropdownContainer, DropdownContent } from './DropdownContainer';

export interface INavListItemsProps {
  name: string;
  items: {
    name: string;
    id: string;
    icon: any;
  }[];
  id: string;
}

const SideNavItems = ({
  shrinkSidebar,
  navList,
}: {
  shrinkSidebar: boolean;
  navList: INavListItemsProps[];
}) => {
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
        return (
          <SideNavListItem
            name={name}
            id={id}
            icon={icon}
            index={index}
            header={header}
            shrinkSidebar={shrinkSidebar}
            activeState={activeState}
            setActiveState={setActiveState}
            key={id}
          />
        );
      })}
    </UL>
  );
};

const SideNavListItemHeader = ({ name, id, index, shrinkSidebar }) => {
  return (
    <LI key={id} marginAttr={shrinkSidebar && '0 auto'}>
      <Space height={index === 0 ? '32px' : '40px'} />
      <P fontWeight="500" fontSize="12px">
        {name}
      </P>
      <Space height="20px" />
    </LI>
  );
};


const SideNavListItemChild = ({ name, id, icon, shrinkSidebar, activeState, setActiveState }) => {
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
};

const SideNavListItem = ({ name, id, icon, header, index, shrinkSidebar, activeState, setActiveState }) => {
  if (header) {
    return (
      <SideNavListItemHeader
        name={name}
        id={id}
        index={index}
        shrinkSidebar={shrinkSidebar}
        key={id}
      />
    );
  }
  return (
    <SideNavListItemChild
      name={name}
      id={id}
      icon={icon}
      shrinkSidebar={shrinkSidebar}
      activeState={activeState}
      setActiveState={setActiveState}
      key={id}
    />
  );
};

const SideNav = ({
  currentAccount,
  emails,
  workspaces,
  navList,
  shrinkSidebar,
}) => {
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

export default SideNav;
