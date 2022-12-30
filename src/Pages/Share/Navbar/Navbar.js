import React, { useEffect, useState } from 'react';
import { Container, Image, Nav, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../image/uiu_logo.svg.png';
import '../../Style/Style.css';
const Navbar = () => {
    const [order, setOrder] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const [signOut, SignLoading, signError] = useSignOut(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('state');
    }
    useEffect(() => {
        fetch(`http://localhost:5000/purchased/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img src={logo} width='80px'></img>
                        <a className="navbar-brand" href="#">UIU Canteen</a>
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link to="/canteen">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>

                        <Link to='/myOrder' className='order'><i class="fa-solid fa-cart-shopping"><sup className='cartCount'>{order?.length}</sup></i></Link>
                        {user ? <button type="button" onClick={logout} className="btn btn-outline-danger">Sign Out</button> : <Link to="/login">Login</Link>}

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;