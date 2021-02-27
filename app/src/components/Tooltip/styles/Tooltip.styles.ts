import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TooltipBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.oxford};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  padding: 3px 12px;
  border-radius: 3px;
  transform-origin: center center;
  z-index: 999;
  padding: 10px 17px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.oxford};
    }
  }
`;

export const TooltipText = styled.div`
  cursor: pointer;
`;

export default { TooltipBox, TooltipText };
