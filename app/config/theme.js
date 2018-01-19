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
  primaryColor: '#ffffff',
  backgroundColor: '#181819',
  ...basic,
};

const light = {
  primaryColor: '#212121',
  backgroundColor: '#cfd8dc',
  ...basic,
};

const theme = {
  light,
  dark,
};

export default theme;
