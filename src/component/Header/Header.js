import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut,admin } = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home">CinemaX</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                       
                        {
                            user.email && admin && <Nav.Link as={Link} to="/add-movies">Add Movie</Nav.Link>
                        }
                        {
                            user.email && admin && <Nav.Link as={Link} to="/make-admin">Make Admin</Nav.Link>

                        }
                        {
                            user.email && !admin && <Nav.Link as={Link} to="/watchlist">My Watchlist</Nav.Link>
                        }
                        {user.displayName && <span style={{ color: 'black' }}>Hello <u>{user.displayName.toUpperCase()}</u></span>}
                        {
                            user.email ?
                                <button style={{ marginLeft: '1%' }} onClick={logOut}>Log out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;