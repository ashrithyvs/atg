import { useState } from "react";
import { Button, Form, Modal, Alert, Container } from "react-bootstrap";
import google from "./google.svg";
import Img from "./img.png";
import { useHistory } from "react-router-dom";
import "./Auth.css";
function Auth() {
  const [show, setShow] = useState(true);
  const [change, setChange] = useState(false);
  const history = useHistory();

  const hideHandler = () => {
    setShow(false);
    history.push("/");
  };

  return (
    <Modal
      show={show}
      onHide={hideHandler}
      dialogClassName="modal-90w"
      size="lg"
      centered
      className="modal"
    >
      <Modal.Header className="p-0">
        <Alert variant="success m-0 py-3 alert text-center w-100">
          <small style={{ fontSize: "0.8rem" }}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </small>
        </Alert>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex header justify-content-between px-3 py-2">
          {change ? (
            <>
              <h3>Sign In</h3>
              <small className="text-muted my-auto">
                Don’t have an account yet?
                <a href="#signin" onClick={(e) => setChange(false)}>
                  Create new for free!
                </a>
              </small>
            </>
          ) : (
            <>
              <h3>Create Account</h3>
              <small className="text-muted my-auto">
                Already have an account?
                <a href="#signin" onClick={(e) => setChange(true)}>
                  Sign In
                </a>
              </small>
            </>
          )}
        </div>
        {change ? <SignInContainer /> : <RegisterContainer />}
      </Modal.Body>
    </Modal>
  );
}

function RegisterContainer() {
  return (
    <Container>
      <div className="d-flex justify-content-between my-1">
        <Form>
          <Form.Group className="d-flex">
            <Form.Control type="text" placeholder="First Name" />
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Control
            type="password"
            placeholder="Password                                                     &#xf06e;"
            style={{ fontFamily: "FontAwesome,IBM Plex Sans,sans-serif" }}
          />
          <Form.Control type="password" placeholder="Confirm Password" />
          <Button className="w-100 my-3" style={{ borderRadius: "1rem" }}>
            <small>Create Account</small>
          </Button>

          <div className="my-2">
            <Button className="my-1 w-100" variant="light">
              <i style={{ color: "blue" }} className="fab fa-facebook mx-2"></i>
              <small>Sign up with Facebook</small>
            </Button>
            <Button className="my-1 w-100" variant="light">
              <img src={google} alt="google icon" className="mx-2" />
              <small>Sign up with Google</small>
            </Button>
          </div>
        </Form>
        <img className="w-75 mx-4 joy" src={Img} alt="Register" />
      </div>
    </Container>
  );
}

function SignInContainer() {
  return (
    <h1>
      <Container>
        <div className="d-flex justify-content-between my-1">
          <Form>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Control
              type="password"
              placeholder="Password                                                     &#xf06e;"
              style={{ fontFamily: "FontAwesome,IBM Plex Sans,sans-serif" }}
            />
            <Button className="w-100 my-3" style={{ borderRadius: "1rem" }}>
              <small>Create Account</small>
            </Button>

            <div className="my-2">
              <Button className="my-1 w-100" variant="light">
                <i
                  style={{ color: "blue" }}
                  className="fab fa-facebook mx-2"
                ></i>
                <small>Sign up with Facebook</small>
              </Button>
              <Button className="my-1 w-100" variant="light">
                <img src={google} alt="google icon" className="mx-2" />
                <small>Sign up with Google</small>
              </Button>
            </div>
          </Form>
          <img src={Img} className="w-75 mx-4 joy" alt="Login" />
        </div>
      </Container>
    </h1>
  );
}

export default Auth;
