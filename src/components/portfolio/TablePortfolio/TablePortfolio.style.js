/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/forbid-prop-types: 0 */
import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.div`
  padding-top: 2%;
  display: flex;
  justify-content: center;
`;

export const TableContainer = styled.table`
  width: 405px;
  height: 500px;
  text-align: left;
  border-spacing: 5px;
  border-radius: 4px;
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${props => theme[props.theme].primaryColor};
  font-size: 15px;
  line-height: ${props => theme[props.theme].lineHeight}rem;
  letter-spacing: ${props => theme[props.theme].letterSpacing}rem;
  margin-bottom: 2rem;
  background-color: ${props => theme[props.theme].backgroundColor};
  td {
    padding-right: 15px;
  }
`;

export const CoinContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-top: 5px;
`;

export const CoinLogo = styled.div`
  padding-top: 3px;
`;

export const CoinName = styled.div`
  padding-left: 10px;
  padding-top: 3px;
`;
