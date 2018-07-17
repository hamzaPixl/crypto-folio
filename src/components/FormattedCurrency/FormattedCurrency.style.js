import styled from 'styled-components';

import theme from '../../utils/theme';

export const Container = styled.div`
  &.negative {
    color: ${theme.basic.changeNegative};
  }
  &.positive {
    color: ${theme.basic.changePositive};
  }
`;
