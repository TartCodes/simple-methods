import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
const Header = () => {
  return (
    <Navbar
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark"
      className="gap-3 px-3"
    >
      <Nav variant="pills" defaultActiveKey="/strings" className="flex-grow-1 justify-content-evenly">
        <Nav.Item>
          <Nav.Link href="/strings">String Methods</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/arrays">Array Methods</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/objects">Object Methods</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
