/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/forbid-prop-types: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import { FormattedPercentage, FormattedCurrency } from '../../formatted';
import { CoinContainer, CoinLogo, CoinName, Container, TableContainer } from './TableMarket.style';

function TableMarket(props) {
  return (
    <Container>
      <TableContainer>
        <tbody>
          {
            props.coins.map((coin) => {
              const change24 = coin.percent_change_24h / 100;
              const percentageClass = coin.percent_change_24h < 0 ? 'negative' : 'positive';
              return (
                <tr key={coin.name}>
                  <td>
                    <CoinContainer>
                      <CoinLogo>{coin.icon}</CoinLogo>
                      <CoinName>{coin.symbol}</CoinName>
                    </CoinContainer>
                  </td>
                  <td>
                    <FormattedCurrency class={percentageClass} value={coin.price_usd} />
                  </td>
                  <td>
                    <FormattedPercentage value={change24} class={percentageClass} />
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

TableMarket.propTypes = {
  coins: PropTypes.array,
};

TableMarket.defaultProps = {
  coins: [],
};

export default TableMarket;
