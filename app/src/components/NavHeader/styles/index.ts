import styled from 'styled-components';

export const SettingsIconWrapper = styled.div`
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

export const LogoutWrapper = styled.div`
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

export const Header = styled.header`
  height: 64px;
  border-left: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
