import React from 'react';
import { Avatar, Container, Link, Search, Porfolio, Market, Home, Chart } from './NavigationBar.style';

function NavigationBar() {
  const links = [{
    name: 'Home',
    icon: Home,
  },
  {
    name: 'Market',
    icon: Market,
  },
  {
    name: 'Portfolio',
    icon: Porfolio,
  },
  {
    name: 'Chart',
    icon: Chart,
  },
  {
    name: 'Search',
    icon: Search,
  }];
  return (
    <Container>
      <Avatar>
        <i className="material-icons"> account_circle </i>
      </Avatar>
      {
        links.map(link => (
          <Link key={link.name}> {link.icon} </Link>
        ))
      }
    </Container>
  );
}

export default NavigationBar;
