
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container className='mr-0'>
        <Navbar.Brand href="#home">skitter</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#tasks">Human Resources</Nav.Link>
                <Nav.Link href="#tasks1">IT</Nav.Link>
                <Nav.Link href="#tasks2">Sales</Nav.Link>
                <Nav.Link href="#tasks2">Management</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

  )
}

export default Header