const basic = {
  fontFamily: 'Roboto',
  fontWeight: 300,
  lineHeight: 2,
  letterSpacing: 0.01,
  titleSize: 80,
  dotColor: '#FF3266',
  changePositive: '#00c853',
  changeNegative: '#f44336',
  progressCircle: '#FF3266',
};

const dark = {
  bodyColor: '#000000',
  primaryColor: '#ffffff',
  backgroundColor: '#181819',
  ...basic,
};

const light = {
  bodyColor: '#ffffff',
  primaryColor: '#212121',
  backgroundColor: '#eeeeee',
  ...basic,
};

export default {
  light,
  dark,
};
