import { useState } from "react";
import { Form, Container, Button, Dropdown } from "react-bootstrap";

function Location() {
  const [location, setLocation] = useState("");
  const locationIcon = <i class="fas fa-map-marker-alt"></i>;
  console.log(locationIcon);
  return (
    <Container className="d-flex flex-column align-items-center">
      <div>
        <Dropdown.Toggle variant="light mx-2">Write a post</Dropdown.Toggle>
        <Button className="mx-2">Join a Group</Button>
      </div>
      <Form className="my-4 w-75">
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.currentTarget.value)}
          placeholder="&#xf3c5;   Enter your location                 &#xf304;"
          style={{
            borderTop: 0,
            borderRight: 0,
            borderLeft: 0,
            fontFamily: "fontAwesome,roboto",
          }}
        />
      </Form>
      <div className="d-flex w-75">
        <i class="fas fa-info-circle my-auto mx-2"></i>
        <span className="text-muted" style={{ fontSize: "0.7rem" }}>
          Your location will help us serve better and extend a personalised
          experience.
        </span>
      </div>
    </Container>
  );
}

export default Location;
