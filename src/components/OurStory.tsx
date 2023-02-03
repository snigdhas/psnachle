import * as React from "react";

import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Helmet } from "react-helmet-async";

import prachi from "../img/prachi.webp";
import snigdha from "../img/snigdha.webp";
import together from "../img/together.webp";

const images = [
  { img: together, title: "Phir Se Nachle" },
  { img: prachi, title: "Prachi" },
  { img: snigdha, title: "Snigdha" },
];
const OurStory = () => {
  return (
    <Container>
      <Helmet>
        <title>Our Story</title>
      </Helmet>
      <Row>
        <Col className="text-white" sm={7}>
          <p>
            Hi! We&apos;re Snigdha and Prachi, founders of Phir Se Nachle! We
            met on their collegiate dance team back in 2016, and hit it off
            instantly, bonding over our passion for dance over many cups of
            chai. We continued to dance together through college for 3 years
            before starting our careers at Google.
          </p>
          <p>
            We realized that we missed dancing togehter, and when an opportunity
            came along to choreograph and participate in a local dance
            competition, we jumped at the chance! Putting together a dance team
            and choreographing a performance reminded us of all the reasons we
            loved to dance together in the first place and we knew we had to
            keep it going even after the competition was over.
          </p>
          <p>
            And thus, Phir Se Nachle was born - a reminder that it&apos;s never
            too late to start dancing again! In January of 2020, we posted our
            first video on YouTube! We began teaching in-person weekly classes
            at Google, but 2020 had different plans. Throughout the pandemic, we
            shifted to sharing solo choreographies and teaching via virtual
            classes and online tutorials. This gave us time to explore a variety
            of different styles and grow as dancers and instructors.
          </p>
          <p>
            We&apos;re thrilled to be back to teaching both virtually and
            in-person, and look forward to putting on our next show!
          </p>
        </Col>
        <Col sm={5}>
          <Carousel className="w-100">
            {images.map(({ img, title }) => (
              <Carousel.Item key={title}>
                <img className="d-block w-100" src={img} />
                <Carousel.Caption>
                  <h2>{title}</h2>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default OurStory;
