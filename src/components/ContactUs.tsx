import * as React from "react";

import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Helmet>
        <title>Phir Se Nachle</title>
      </Helmet>
      <iframe
        className="align-items-center justify-content-center"
        height="944"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfCgUtXGFrhq5pWx5r4SshiFwmt7QupCXCEePusg7bL7MKhmA/viewform?embedded=true"
        width="640"
      >
        Loading…
      </iframe>
    </Container>
  );
};

export default ContactUs;
