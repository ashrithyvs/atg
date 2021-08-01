import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import logo from "./whole.png";
import Auth from "../Auth/Auth";
import "./NavigationBar.css";
function NavigationBar() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar bg="light" fixed="top" expand="lg">
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Across the globe logo"
            className="navigation-brand align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="mx-auto search-bar">
            <FormControl
              type="search"
              placeholder="&#xf002;     Search for your favorite groups in ATG"
              aria-label="Search for your favorite groups in ATG"
              style={{
                borderRadius: "40px",
                backgroundColor: "#F2F2F2",
                border: 0,
                width: "30vw",
                fontSize: "1rem",
                fontFamily: "FontAwesome,IBM Plex Sans,sans-serif",
              }}
            />
          </Form>
          <Navbar.Text className="mx-5 text">
            Create account.
            <a href="#register" onClick={() => setShowLogin(true)}>
              It’s free!
            </a>
          </Navbar.Text>
          <Button
            variant="light"
            onClick={() => setShowLogin(true)}
            className="register-btn my-3 mx-4"
          >
            Register
          </Button>
        </Navbar.Collapse>
      </Navbar>
      {showLogin ? <Auth showAuth={showLogin} /> : null}
    </>
  );
}

export default NavigationBar;
