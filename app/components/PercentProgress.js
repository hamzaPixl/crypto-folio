import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';

import theme from '../config/theme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  div > div {
    display: none;
  }
  > div > svg {
    stroke-linecap: round;
    > path:first-child {
      stroke: ${theme.backgroundColorTable};
    }
  }
`;

const themeProgress = {
  active: {
    color: theme.progressCircle,
  },
  default: {
    color: theme.progressCircle,
  },
};

function PercentProgress(props) {
  return (
    <Container>
      <Progress
        type="circle"
        theme={themeProgress}
        strokeWidth={6}
        percent={props.percent}
      />
    </Container>
  );
}

PercentProgress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default PercentProgress;
