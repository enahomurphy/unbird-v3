import React from 'react';

import { Div, Span } from 'components/Styles';
import CapitalizeFirstLetter from 'lib/utils/capitalizeAndReturnFirstLetter';
import Avatar from 'components/Avatar';

interface ICurrentAccount {
  workspace: string;
  email: string;
}

export interface CompanyLogoWithUsernameProps {
  showDropdown: boolean;
  setShowDropdown: (boolean) => void;
  currentAccount: ICurrentAccount;
  src?: string;
}

const CompanyLogoWithUsername = ({
  showDropdown,
  setShowDropdown,
  currentAccount,
  src
}: CompanyLogoWithUsernameProps) => {
  return (
    <Div
      className="user-logo"
      display="flex"
      alignItems="center"
      padding="16px"
      onClick={(e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
      }}
    >
      <Div
        marginRight="10px"
      >
        <Avatar
          src={src}
          width="32px"
          initials={CapitalizeFirstLetter(currentAccount.email)}
          radius="8px"
          css={{ fontWeight: 400 }}

        />
        </Div>
      <Div
        display="flex"
        flexDirection="column"
        fontSize="10px"
        lineHeight="16px"
      >
        <Span fontWeight="400">{currentAccount.email}</Span>
        <Span fontWeight="500">{currentAccount.workspace}</Span>
      </Div>
    </Div>
  );
};

CompanyLogoWithUsername.defaultProps = {
  src: 'https://randomuser.me/api/portraits/men/78.jpg'
};

export default CompanyLogoWithUsername;
