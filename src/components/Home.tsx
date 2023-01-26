import * as React from "react";

import { Helmet } from "react-helmet-async";

import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Phir Se Nachle</title>
      </Helmet>
      <div className="text-light w-100 h-100">Welcome!</div>
    </Container>
  );
};

export default Home;
