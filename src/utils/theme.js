const basic = {
  fontFamily: 'Roboto',
  fontWeight: 300,
  lineHeight: 2,
  letterSpacing: 0.01,
  titleSize: 40,
  dotColor: '#ff3d00',
  changePositive: '#00c300',
  changeNegative: '#df2029',
  progressCircle: '#64b5f6',
};

const dark = {
  name: 'dark',
  bodyColor: '#131418',
  primaryColor: '#ffffff',
  backgroundColor: '#2c3e50',
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
