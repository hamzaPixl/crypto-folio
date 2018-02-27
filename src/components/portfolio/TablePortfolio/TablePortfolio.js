/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/forbid-prop-types: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import { FormattedCurrency, FormattedCoin } from '../../formatted';
import { ProgressBar } from '../../progress';
import { CoinContainer, CoinLogo, CoinName, Container, TableContainer } from './TablePortfolio.style';

function TablePortfolio(props) {
  const totalPrice = props.coins.reduce((a, b) => (a + b.totalPrice), 0);
  return (
    <Container>
      <TableContainer theme={props.theme}>
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
                    <FormattedCoin value={coin.hodl} />
                  </td>
                  <td>
                    <FormattedCurrency value={coin.totalPrice} />
                  </td>
                  <td>
                    <ProgressBar theme={props.theme} percent={percent} />
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
  theme: PropTypes.string,
  coins: PropTypes.array,
};

TablePortfolio.defaultProps = {
  coins: [],
  theme: 'light',
};

export default TablePortfolio;
