/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the Menu function component, which returns a Bootstrap navbar containing links to the home and help pages.

---------------------------------------------------------------------------------------------------------------------- */

// Import react-bootstrap components.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Menu function component for Navbar.
export default function Menu() {
    return (
        <>
            <Navbar bg="light" variant="light" fixed="top" className="myNavbar" id="myMenu">
                <Container>
                <Nav className="me-start navbarLinks">
                    <Nav.Link className="px-3" href="/">Home</Nav.Link>
                    <Nav.Link className="px-3" href="/Help">Help</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}