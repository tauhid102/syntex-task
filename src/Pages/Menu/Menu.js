import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import '../Style/Style.css'
const Menu = () => {
    function name(params) {
        console.log('hello');
    }
    return (
        <div className='dashboard'>
            <div className='container-fluid'>
                <h1 className="text-center">All Related Food Items</h1>
                <div className='container'>
                    <div className=''>
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                            <Container>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                                <Navbar.Collapse id="responsive-navbar-nav position-relative">
                                    <Nav className=" flex-row position-absolute top-0 start-50 translate-middle-x">
                                        <Nav.Link className='border-bottom' as={Link} to="/menu/content">All Iteam</Nav.Link>
                                        <Nav.Link className='border-bottom' as={Link} to="/menu/breakfast">Breakfast</Nav.Link>
                                        <Nav.Link className='border-bottom' as={Link} to="/menu/lunch">Lunch</Nav.Link>
                                        <Nav.Link className='border-bottom' as={Link} to="/menu/drinks">Drinks</Nav.Link>
                                        <Nav.Link className='border-bottom' as={Link} to="/menu/desert">Desert</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                    <div className=''>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Menu;