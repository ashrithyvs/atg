import { Container, Button } from "react-bootstrap";
import React from "react";
import Background from "./introBg.jpeg";
import "./Intro.css";

function Intro() {
  const background = {
    width: "100%",
    minHeight: "60vh",
    backgroundImage: `linear-gradient( 180deg,rgba(0, 0, 0, 0.45) 0%,rgba(0, 0, 0, 0.6) 100%), url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section
      className="intro-section d-flex flex-column justify-content-end"
      style={background}
    >
      <Button className=" join-btn align-self-end" variant="outline-light">
        Join Group
      </Button>
      <Container className="text-white p-5">
        <h3>Computer Engineering</h3>
        <span>142,765 Computer Engineers follow this</span>
      </Container>
    </section>
  );
}

export default Intro;
