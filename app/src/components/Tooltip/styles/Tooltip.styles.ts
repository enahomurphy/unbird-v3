import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TooltipBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.steele0};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  transform-origin: center center;
  z-index: 999;
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 20px;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.steele0};
    }
  }
`;

export const TooltipText = styled.div`
  cursor: pointer;
`;

export default { TooltipBox, TooltipText };
