import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.png";
import user from "./images/user.svg";

const Navbars = () => {
  return (
    <>
      <Navbar
        style={{
          background: "rgba(240, 240, 240, 1)",
          padding: "0",
          height: "70px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="300"
              height="45"
              className="d-inline-block align-top "
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <i
                style={{
                  background: "#3683F0",
                  borderRadius: "50%",
                  color: "#fff",
                  padding: "9px",
                }}
                className="fa-solid fa-house-chimney"
              ></i>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <i
                style={{
                  background: "#3683F0",
                  borderRadius: "50%",
                  color: "#fff",
                  padding: "9px",
                }}
                className="fa-solid fa-screwdriver-wrench"
              ></i>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <i
                style={{
                  background: "#3683F0",
                  borderRadius: "50%",
                  color: "#fff",
                  padding: "9px",
                }}
                className="fa-solid fa-bell"
              ></i>
            </Nav.Link>
            <Nav.Link href="#features">
              {" "}
              <img
                src={user}
                width="35"
                height="35"
                className="d-inline-block align-top "
                alt="logo"
              />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <i
                style={{
                  borderRadius: "50%",
                  padding: "9px",
                }}
                className="fa-solid fa-ellipsis-vertical"
              ></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
