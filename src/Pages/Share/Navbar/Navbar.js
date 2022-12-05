import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, SignLoading, signError] = useSignOut(auth);
    const logout=()=>{
        signOut(auth);
        localStorage.removeItem('state');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Syntex</a>
                        <ul className="navbar-nav ms-auto mb-2">
                            <li className="nav-item">
                                <Link to="/content">Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                {user ? <button type="button" onClick={logout} className="btn btn-outline-danger">Sign Out</button> : <Link to="/login">Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;