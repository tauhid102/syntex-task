import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrder] = useState([]);
    const [accepted, setAccepted] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/purchased/allorder')
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
    }, [accepted]);
    const handleCancenOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/purchased/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restBooking = orders.filter(order => order._id !== id);
                        setOrder(restBooking);
                    }
                })
        }
    }
    const handleAcceptOrder = (id) => {
        const ids = { id };
        const proceed = window.confirm('Are you sure, you want to accepted?');
        if (proceed) {
            const url = `http://localhost:5000/purchased/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(ids)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        alert('Accepted Successfully');
                        setAccepted(false);
                    }
                })
        }
    }

    return (
        <div>
            <h3 className='mt-5 mb-3'>Manage Order and <span className='text-danger'>Confirmed</span></h3>
            <div className="table-responsive">
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Iteam Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancel</th>
                            <th scope="col">Acccept</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((food) => (
                            <tr key={food?._id}>
                            <td>{food?.name}</td>
                            <td>{food?.itemName}</td>
                            <td>{food?.itemPrice}</td>
                            <td>{food?.category}</td>
                            <td>{food?.status}</td>
                            <td><button onClick={() => handleCancenOrder(food._id)} className="btn btn-warning b-0"><i class="fa-solid fa-ban"></i></button></td>
                            <td><button onClick={() => handleAcceptOrder(food._id)} className="btn btn-info mt-2 b-0"><i class="fa-solid fa-check"></i></button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;