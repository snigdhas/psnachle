import * as React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

import Navbar from "./NavbarHeader";

const Layout = () => {
  return (
    <>
      <header className="d-flex align-items-start flex-column ps-5 mt-5 border-bottom border-light-subtle">
        <Navbar />
        <hr />
      </header>
      <main>
        <Container className="py-3 py-md-4" fluid>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
