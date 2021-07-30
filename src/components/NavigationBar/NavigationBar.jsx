import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import logo from "./whole.png";
import Auth from "../Auth/Auth";
function NavigationBar() {
  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);
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
              placeholder="&#xf002;     Search for your favorite groups in ATG"
              className="mr-2"
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
        </Navbar.Collapse>
        <Navbar.Text className="px-5">
          Create account.{" "}
          <a href="#register" onClick={() => setShowLogin(true)}>
            It’s free!
          </a>
        </Navbar.Text>
      </Navbar>
      {showLogin ? <Auth showReg /> : null}
    </div>
  );
}

export default NavigationBar;
