/* eslint react/style-prop-object: 0 */
import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.div`
  margin-top: 2%;
  display: inline-flex;
  color: ${props => theme[props.theme].primaryColor};
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
`;

export const Resume = styled.div`
  text-align: center;
  font-size: 40px;
`;

export const BTC = styled.div`
  padding-top: 5px;
  font-size: 20px;
`;

export const ETH = styled.div`
  padding-top: 5px;
  font-size: 20px;
`;

export const USD = styled.div`
  font-size: 100px;
  color: ${theme.basic.dotColor};
`;
