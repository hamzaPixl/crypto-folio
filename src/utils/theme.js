const basic = {
  fontFamily: 'Roboto',
  fontWeight: 300,
  lineHeight: 2,
  letterSpacing: 0.01,
  titleSize: 40,
  dotColor: '#64b5f6',
  changePositive: '#00c853',
  changeNegative: '#f44336',
  progressCircle: '#64b5f6',
};

const dark = {
  name: 'dark',
  bodyColor: '#212121',
  primaryColor: '#ffffff',
  backgroundColor: '#484848',
  ...basic,
};

const light = {
  name: 'light',
  bodyColor: '#fafafa',
  primaryColor: '#212121',
  backgroundColor: '#eceff1',
  ...basic,
};

export default {
  light,
  dark,
  basic,
};
