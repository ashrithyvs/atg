import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "./whole.png";
import Auth from "../Auth/Auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./NavigationBar.css";
function NavigationBar() {
  return (
    <Router>
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
            <Link to="/register">It’s free!</Link>
          </Navbar.Text>
          <Link to="/register">
            <Button variant="light" className="register-btn my-3 mx-4">
              Register
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/register">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavigationBar;
