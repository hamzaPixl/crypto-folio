import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../utils/theme';
import { Checkbox, Container, Dark, Light } from './ThemeSwitcher.style';

function ThemeSwitcher(props) {
  const iconStyle = {
    fill: theme.basic.mainColor,
  };

  return (
    <Container>
      <Checkbox
        onCheck={() => props.onChangeTheme()}
        iconStyle={iconStyle}
        checkedIcon={<Dark />}
        uncheckedIcon={<Light />}
        label=""
      />
    </Container>
  );
}

ThemeSwitcher.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
