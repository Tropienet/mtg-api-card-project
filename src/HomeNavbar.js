import { Container, Navbar } from "react-bootstrap";


function HomeNavbar() {

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Magic the Gathering card site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    )
}

export default HomeNavbar;