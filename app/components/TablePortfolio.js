/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/forbid-prop-types: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import FormattedCurrency from './FormattedCurrency';
import FormattedCoin from './FormattedCoin';
import ProgressBar from './ProgressBar';

const Container = styled.div`
  padding-top: 2%;
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.table`
  width: 405px;
  height: 500px;
  text-align: left;
  border-spacing: 5px;
  border-radius: 4px;
  font-family: ${theme.fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${theme.primaryColor};
  font-size: 15px;
  line-height: ${theme.lineHeight}rem;
  letter-spacing: ${theme.letterSpacing}rem;
  margin-bottom: 2rem;
  background-color: ${theme.backgroundColor};
  td {
    padding-right: 15px;
  }
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

function TablePortfolio(props) {
  const totalPrice = props.coins.reduce((a, b) => (a + b.totalPrice), 0);
  return (
    <Container>
      <TableContainer>
        <tbody>
          {
            props.coins.map((coin) => {
              const percent = Math.round((coin.totalPrice / totalPrice) * 100);
              return (
                <tr key={coin.name}>
                  <td>
                    <CoinContainer>
                      <CoinLogo>{coin.icon}</CoinLogo>
                      <CoinName>{coin.symbol}</CoinName>
                    </CoinContainer>
                  </td>
                  <td>
                    <FormattedCurrency value={coin.totalPrice} />
                  </td>
                  <td>
                    <FormattedCoin value={coin.totalBTC} />
                  </td>
                  <td>
                    <ProgressBar percent={percent} />
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

TablePortfolio.propTypes = {
  coins: PropTypes.array,
};

TablePortfolio.defaultProps = {
  coins: [],
};

export default TablePortfolio;
