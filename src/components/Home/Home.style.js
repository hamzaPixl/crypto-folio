import styled from 'styled-components';
import Sync from 'material-ui/svg-icons/notification/sync';

import theme from '../../utils/theme';

export { Sync, theme };

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 1%;
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${props => theme[props.theme].primaryColor};
  font-size: ${props => theme[props.theme].titleSize}px;
  line-height: ${props => theme[props.theme].lineHeight}rem;
  letter-spacing: ${props => theme[props.theme].letterSpacing}rem;
  text-align: center;
  > div {
    color: ${props => theme[props.theme].dotColor};
  }
`;

export const Container = styled.div`
  background-color: ${props => theme[props.theme].bodyColor};
  padding-top: 2%;
  padding-bottom: 100%;
  text-align: center;
`;

export const ContentContainer = styled.div`
  div.slider-decorator-2,.slider-decorator-0,.slider-decorator-1{
    display: none;
  }
  display: flex;
  justify-content: space-around;
  padding-bottom: 2%;
  padding-top: 3%;
`;

export const Refresh = styled.a`
  cursor: pointer;
  fill: ${props => theme[props.theme].dotColor};
  padding-left: 5px;
`;

export const FooterContainer = styled.div`
  width: 5%;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-around;
  margin: 0 47%;
`;
