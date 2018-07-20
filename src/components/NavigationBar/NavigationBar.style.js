import React from 'react';
import styled from 'styled-components';

export const Home = <i className="material-icons"> home </i>;
export const Chart = <i className="material-icons"> bar_chart </i>;
export const Market = <i className="material-icons"> account_balance </i>;
export const Porfolio = <i className="material-icons"> payment </i>;
export const Search = <i className="material-icons"> search </i>;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding-left: 2%;
  padding-top: 2%;
  text-align: left;
`;

export const Link = styled.a`
  padding-bottom: 15px;
  cursor: pointer;
`;

export const Avatar = styled.div`
  padding-bottom: 20px;
`;
