import React from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import FormattedCurrency from './FormattedCurrency';
import FormattedPercentage from './FormattedPercentage';

import wallet from '../config/wallet';

const Container = styled.div`
  padding-top: 2%;
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.table`
  width: 300px;
  border-radius: 4px;
  font-family: ${theme.fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${theme.primaryColor};
  font-size: 15px;
  line-height: ${theme.lineHeight}rem;
  letter-spacing: ${theme.letterSpacing}rem;
  margin-bottom: 2rem;
  background-color: ${theme.backgroundColorTable};
`;

const CoinContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-top: 5px;
`;

const CoinLogo = styled.div`
  color: ${theme.coinColor};
  padding-top: 3px;
`;

const CoinName = styled.div`
  padding-left: 10px;
  padding-top: 3px;
`;

function TableMarket() {
  return (
    <Container>
      <TableContainer>
        <tbody>
          {
            wallet.map((coin) => {
              return (
                <tr key={coin.name}>
                  <td>
                    <CoinContainer>
                      <CoinLogo>{coin.icon}</CoinLogo>
                      <CoinName>{coin.symbol}</CoinName>
                    </CoinContainer>
                  </td>
                  <td>
                    <FormattedCurrency value={1400} />
                  </td>
                  <td>
                    <FormattedPercentage value={11} class="positive" />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </TableContainer>
    </Container>
  );
}

export default TableMarket;
