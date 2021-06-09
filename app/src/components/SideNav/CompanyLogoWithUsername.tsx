import React from 'react';

import { Div, Span } from 'components/Styles';
import CapitalizeFirstLetter from 'lib/utils/capitalizeAndReturnFirstLetter';

interface ICurrentAccount {
  workspace: string;
  email: string;
}

const CompanyLogoWithUsername = ({
  showDropdown,
  setShowDropdown,
  currentAccount
}: {
  showDropdown: boolean;
  setShowDropdown: (boolean) => void;
  currentAccount: ICurrentAccount
}) => {
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
        width="32px"
        height="32px"
        borderRadius="8px"
        backgroundColor="#F2CC78"
        padding="8px 10px"
        marginRight="10px"
      >
        {CapitalizeFirstLetter(currentAccount.workspace)}
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

export default CompanyLogoWithUsername;
