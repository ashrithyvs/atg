import { Navbar, Form, FormControl } from "react-bootstrap";
import React from "react";
import logo from "./whole.png";
function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" fixed="top" expand="lg">
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Across the globe logo"
            style={{ padding: "1rem 4rem" }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          className="d-flex justify-content-center"
          id="navbarScroll"
        >
          <Form>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              style={{
                borderRadius: "40px",
                backgroundColor: "#F2F2F2",
                border: 0,
                width: "30vw",
              }}
            />
          </Form>
        </Navbar.Collapse>
        <Navbar.Text className="px-5">
          Create account. <a href="#signup">It’s free!</a>
        </Navbar.Text>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
