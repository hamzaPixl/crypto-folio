import React from 'react';
import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';
import Light from 'material-ui/svg-icons/image/wb-sunny';
import Dark from 'material-ui/svg-icons/image/brightness-3';

import theme from '../utils/theme';

const Container = styled.div`
  display: inline-flex;
  padding-right: 2%;
`;

class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
  }

  toggleSwitchChanged() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const iconStyle = {
      fill: theme.basic.dotColor,
    };
    return (
      <Container>
        <Checkbox
          iconStyle={iconStyle}
          checkedIcon={<Dark />}
          uncheckedIcon={<Light />}
          label=""
        />
      </Container>
    );
  }
}

export default ThemeSwitcher;
