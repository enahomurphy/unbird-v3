import styled from 'styled-components';

export const RecordWrapper = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  text-align: center;
  bottom: 90px;
  position: absolute;
  align-items: center;
  margin-left: 11px;
`;

export const ShareWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.popover};
  display: flex;
  justify-content: left;
  flex-direction: row;
  text-align: center;
  align-items: start;
  align-self: left;
  left: 416px;
  top: 44px;
  width: 250px;
  position: absolute;
`;

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.licorice};
  border: 1px solid white;
  border-radius: 3px;
  z-index: ${({ theme }) => theme.zIndex.popover};
  padding: 30px;
  padding-top: 20px;
  border-radius: 6px;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 250px;
`;

interface NewWorkspaceProps {
  left: string;
  top: string;
}

export const Title = styled.div`
  font-weight: bold;
`;

export const Body = styled.div``;

export const Icon = styled.span`
  margin: 30px 0;
  font-size: 50px;
  align-self: center;
`;

export const Close = styled.div`
  align-self: flex-end;
  cursor: pointer;
`;

export const MenuTrayIcon = styled.div<{ image: string }>`
  width: 200px;
  height: 33px;
  background-image: url(${({ image }) => image});
`;
