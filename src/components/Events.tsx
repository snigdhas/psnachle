import * as React from "react";

import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import diwali1 from "../img/Diwali1.webp";
import diwali2 from "../img/Diwali2.webp";
import svbdc1 from "../img/SVBDC1.webp";
import svbdc2 from "../img/SVBDC2.webp";

const newTypeError = () => {
  throw new TypeError("wrong type!");
};

const Events = () => {
  return (
    <Container className="d-flex flex-grow justify-content-end">
      <Helmet>
        <title>Events</title>
      </Helmet>
      <section>
        <button onClick={() => newTypeError()}>Break the world</button>;
      </section>
      <section className="w-50 text-light">
        <h3 className="pt-4 text-center">Event Choreography</h3>
        <div className="p-4">
          There&apos;s nothing we love more than putting together a dance and
          seeing it performed on stage! Our team has choreographed and performed
          at events in San Francisco, Pittsburgh, India, Thailand, and beyond!
          We&apos;d love to partof your next event!
        </div>
        <div className="p-4">
          Whether it&apos;s a Diwali party, sangeet, jaggo, first dance, or any
          other event, we&apos;d love to help you create a dance performance
          that will be sure to impress your guests! Contact us via{" "}
          <a
            className="link-secondary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd9T-inzxNsK5WYsr3hXYWbIlIMX4DzZ5tsrxR2QIQq5YGphw/viewform"
            rel="noreferrer"
            target={"_blank"}
          >
            this form
          </a>{" "}
          for more information.
        </div>
      </section>
      <Carousel className="w-50">
        {[diwali1, diwali2, svbdc1, svbdc2].map((img, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={img} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Events;
