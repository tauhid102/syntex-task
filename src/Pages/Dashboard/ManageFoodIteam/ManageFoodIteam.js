import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageFoodIteam = () => {
    const [foodIteam,setFoodIteam]=useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/content')
            .then(res => res.json())
            .then(data => setFoodIteam(data))
    }, []);
    const handleDeleteProduct=(id)=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/content/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restIteam = foodIteam.filter(order => order._id !== id);
                        setFoodIteam(restIteam);
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='mt-5 mb-3'>Manage Product and <span className='text-danger'>Remove</span></h3>
            <div className="table-responsive">
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Image</th>
                            <th scope="col">Delete Iteam</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodIteam?.map((food) => (
                            <tr key={food?._id}>
                            <td>{food?.name}</td>
                            <td>{food?.price}</td>
                            <td>{food?.categories}</td>
                            <td><img src={food.photo} alt="" style={{ width: '30px' }} srcset="" /></td>
                            <td><button onClick={() => handleDeleteProduct(food._id)} className="btn btn-danger b-0"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageFoodIteam;