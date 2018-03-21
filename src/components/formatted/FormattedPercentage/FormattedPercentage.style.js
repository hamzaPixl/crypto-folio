import styled from 'styled-components';

import theme from '../../../utils/theme';

import arropUp from '../../../assets/icons/arrow_up.svg';
import arrowDown from '../../../assets/icons/arrow_down.svg';

export const ArrowUp = arropUp;

export const ArrowDown = arrowDown;

export const Container = styled.div`
  display: flex;
  padding-right: 5px;
  justify-content: flex-end;
  &.negative {
    color: ${theme.basic.changeNegative};
  }
  &.positive {
    color: ${theme.basic.changePositive};
  }
`;
