import styled from 'styled-components';
import theme from '../../../utils/theme';

export const CardContainer = styled.div`
  border-radius: 4px;
  background-color: ${props => theme[props.theme].backgroundColor};
  box-shadow: 0 2px 4px 0 rgba(91,114,137,0.2);
  padding: 25px;
`;

export const Container = styled.div`
  font-size: 20px;
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
`;

export const Name = styled.div`
  padding-bottom: 2%;
`;

export const CoinInformation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2%;
`;

export const Symbol = styled.div``;

export const PriceBTC = styled.div``;

export const MarketInformation = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
`;

export const Capitalisation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1%;
  > div {
    padding-left: 5px;
  }
`;

export const Volume = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    padding-left: 5px;
  }
`;

export const PriceUSD = styled.div``;

export const Percent = styled.div`
  font-size: 19px;
  > div {
    padding: 0;
  }
`;

export const SymbolContainer = styled.div`
  display: flex;
  text-align: left;
  padding-bottom: 2%;
`;

export const CoinNameCointainer = styled.div`
  text-transform: uppercase;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 6%;
`;

export const PriceContainer = styled.div`
  text-align: right;
  font-size: 16px;
`;

export const SearchContainer = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`;
