import * as React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

import NavbarHeader from "./NavbarHeader";

const Layout = () => {
  return (
    <>
      <Container>
        <header className="d-flex align-items-start flex-column mt-5 border-bottom border-light-subtle">
          <NavbarHeader />
        </header>
      </Container>
      <main>
        <Container className="py-3 py-md-4" fluid>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
