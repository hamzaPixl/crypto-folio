/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/forbid-prop-types: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import { ProgressBar, FormattedCurrency, FormattedCoin } from '../../components';
import { CoinContainer, CoinLogo, CoinName, Container, TableContainer } from './TablePortfolio.style';

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
                    <FormattedCoin value={coin.hodl} />
                  </td>
                  <td>
                    <FormattedCurrency value={coin.totalPrice} />
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
