import React from 'react';
import olympia from '../image/pic-2.jpg'
import vikrampur from '../image/pic-1.jpg'
import kk from '../image/pic-3.jpg'
import home_circle from '../image/home_circle.png'
import { Link } from 'react-router-dom';
const Canteen = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-4 container'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={olympia} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body mt-4">
                                    <button className='btn btn-warning'>Olempia</button>
                                    <Link to='/menu' className='btn btn-info'>Menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={vikrampur} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body mt-4">
                                    <button className='btn btn-warning'>Vikrampur</button>
                                    <Link to='/menu' className='btn btn-info'>Menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={kk} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body mt-4">
                                    <button className='btn btn-warning'>KK</button>
                                    <Link to='/menu' className='btn btn-info'>Menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-8'>
                    <img src={home_circle} width='100%'></img>
                </div>
            </div>
        </div>
    );
};

export default Canteen;