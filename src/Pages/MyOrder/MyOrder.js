import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/purchased/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email]);
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
                        const restIteam = order.filter(order => order._id !== id);
                        setOrder(restIteam);
                    }
                })
        }
    }
    return (
        <div className='container'>
            <h3 className='mt-5 mb-3'>My <span className='text-danger'> Order</span></h3>
            <div className="table-responsive">
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                            <th scope="col">Buyer Name</th>
                            <th scope="col">Iteam Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order?.map((food) => (
                            <tr key={food?._id}>
                            <td>{food?.name}</td>
                            <td>{food?.itemName}</td>
                            <td>{food?.itemPrice}</td>
                            <td>{food?.category}</td>
                            <td>{food?.status}</td>
                            <td><button onClick={() => handleCancenOrder(order._id)} className="btn btn-danger b-0">Cancel Order</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;