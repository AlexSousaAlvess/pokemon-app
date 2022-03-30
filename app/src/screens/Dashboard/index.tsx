import {Card, Container, Header, List} from './styles';

import React from 'react';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <List>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
      </Container>
    </>
  );
}
