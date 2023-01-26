import * as React from "react";

import { Helmet } from "react-helmet-async";

import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Phir Se Nachle</title>
      </Helmet>
      <section className="text-light lead">Welcome!</section>
    </Container>
  );
};

export default Home;
