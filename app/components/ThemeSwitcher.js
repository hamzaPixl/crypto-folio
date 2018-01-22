import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';
import Light from 'material-ui/svg-icons/image/wb-sunny';
import Dark from 'material-ui/svg-icons/image/brightness-3';
import { connect } from 'react-redux';

import theme from '../utils/theme';
import themeActions from '../actions/';

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
    this.toggleSwitchChanged = this.toggleSwitchChanged.bind(this);
  }

  toggleSwitchChanged() {
    this.setState({ checked: !this.state.checked });
    this.props.dispatch(themeActions(this.state.checked));
  }

  render() {
    const iconStyle = {
      fill: theme.basic.dotColor,
    };
    return (
      <Container>
        <Checkbox
          onCheck={this.toggleSwitchChanged}
          iconStyle={iconStyle}
          checkedIcon={<Dark />}
          uncheckedIcon={<Light />}
          label=""
        />
      </Container>
    );
  }
}

ThemeSwitcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

ThemeSwitcher.defaultProps = {
};

const mapStateToProps = state => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(ThemeSwitcher);
