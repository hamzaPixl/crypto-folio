import styled from 'styled-components';
import Sync from 'material-ui/svg-icons/notification/sync';

import theme from '../utils/theme';

export { Sync, theme };

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fontFamily}, sans-serif;
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.theme.titleSize}px;
  line-height: ${props => props.theme.lineHeight}rem;
  letter-spacing: ${props => props.theme.letterSpacing}rem;
`;

export const TitleDot = styled.h1`
  color: ${props => props.theme.mainColor};
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: ${props => props.theme.bodyColor};
  height: 100%;
`;

export const ContentContainer = styled.div`
  div.slider-decorator-2,.slider-decorator-0,.slider-decorator-1{
    display: none;
  }
  display: flex;
  justify-content: space-around;
  padding-top: 10%;
`;

export const Refresh = styled.a`
  cursor: pointer;
  fill: ${props => props.theme.mainColor};
  padding-left: 5px;
`;

export const FooterContainer = styled.div`
  width: 5%;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-around;
  margin: 0 47%;
  position: absolute;
  bottom: 0;
`;
