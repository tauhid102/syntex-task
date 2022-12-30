import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import '../Style/Style.css'

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='dashboard'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-2'>
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                            <Container>

                                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto flex-column">
                                        <Nav.Link className='border-bottom' as={Link} to="/dashboard"><i className="fas fa-money-check-alt"></i>Profile</Nav.Link>
                                        {admin && <Nav.Link className='border-bottom' as={Link} to="/dashboard/manageOrder"><i className="fas fa-money-check-alt"></i>Manage Order</Nav.Link>}
                                        {admin && <Nav.Link className='border-bottom' as={Link} to="/dashboard/manageFood"><i className="fas fa-money-check-alt"></i>Manage Menu</Nav.Link>}
                                        {admin && <Nav.Link className='border-bottom' as={Link} to="/dashboard/addContent"><i className="fas fa-money-check-alt"></i>Add Content</Nav.Link>}
                                        {admin && <Nav.Link className='border-bottom' as={Link} to="/dashboard/allUser"><i className="fas fa-money-check-alt"></i>All User</Nav.Link>}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>

                        </Navbar>
                    </div>

                    <div className='col-sm-12 col-lg-10'>
                        {/* //showing the click iteam in this outlet */}
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;