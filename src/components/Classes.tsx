import * as React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const classes = [
    {
      title: "Performance Series",
      text: "Join an 8-week series of classes where we will work on 2-3 songs, focusing on technique and execution, and culminating in a performance amongst friends and family.",
      button: "Sign up",
    },
    {
      title: "Private Session (1-2 people)",
      text: "Sign up for a private session with one of our instructors. Please fill out the form with details about what styles you want to focus on and we'll tailor the session to you.",
      button: "Sign up",
    },
    {
      title: "Private Session (Group)",
      text: "Schedule a private session with one of our instructors. These sessions are best suited for groups looking to learn and practice for performances at events.",
      button: "Sign up",
    },
  ];

  return (
    <Container>
      <Helmet>
        <title>Classes</title>
      </Helmet>
      <Col className="d-flex flex-row">
        {classes.map(({ title, text, button }) => (
          <>
            <Card className="me-4 border-1">
              {/* TODO: Add image */}
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd4ffJBqqq2tFyJMV1Y6eQKOqu1EIVP8XxRN1gR8VqqTa1dlQ/viewform?usp=sf_link"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <Button>{button}</Button>
                </a>
              </Card.Body>
            </Card>
          </>
        ))}
      </Col>
    </Container>
  );
};

export default Classes;
