import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Desert = () => {
    const [contents, setContents] = useState([]);
    const [iteamName, setIteamName] = useState('')
    const [iteamprice, setIteamPrice] = useState('')
    const [category, setIteamcategory] = useState('')
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [user] = useAuthState(auth);
    const status = 'Pending';
    const initialInfo = { name: user.displayName, email: user.email, phone: '' }
    const [confirmPurchased, setConfirmPurchased] = useState(initialInfo)
    const [foodIteam, setFoodIteam] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/content')
            .then(res => res.json())
            .then(data => setContents(data))
    }, []);
    const restIteam = contents.filter(iteam => iteam.categories === 'desert');
    const iteamDetails = (iteamName, price, category) => {
        setIteamName(iteamName);
        setIteamPrice(price);
        setIteamcategory(category);
    }
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...confirmPurchased }
        newInfo[field] = value;
        console.log(newInfo);
        setConfirmPurchased(newInfo);
    }
    const handleInfo = (e) => {
        e.preventDefault();
        const purchased = {
            ...confirmPurchased,
            status,
            itemName: iteamName,
            itemPrice: iteamprice,
            category: category,
        }
        fetch('http://localhost:5000/purchased', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchased)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    document.getElementById("create-course-form").reset();
                    alert('Order Placed Successfully');
                }
            })

    }
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {restIteam.map((content) => (
                    <div key={content._id} className="col">
                        <div className="card">
                            <img
                                height={200}
                                src={content.photo}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h4 className="card-title">Name:{content.name}</h4>
                                <p className="card-text">Price: {content.price}</p>
                                <p className="card-text">Category: {content.categories}</p>
                                <button type="button" onClick={() => iteamDetails(content.name, content.price, content.categories)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Add to Cart
                                </button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Cart: {content.name}({content.price})</h5>

                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="row g-3 w-100 inputFrom mt-2" id="create-course-form" onSubmit={handleInfo}>
                                                    <div className="col-12">
                                                        <label for="inputAddress" className="form-label">Name</label>
                                                        <input type="text" defaultValue={user.displayName} name='name' onBlur={handleOnBlur} className="form-control" id="inputAddress" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputEmail4" className="form-label">Email</label>
                                                        <input type="email" defaultValue={user.email} name='email' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="number" className="form-label">Phone</label>
                                                        <input type="text" name='phone' onBlur={handleOnBlur} className="form-control" id="number" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="address" className="form-label">Address</label>
                                                        <input type="text" name='address' onBlur={handleOnBlur} className="form-control" id="address" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-dark">Confirmed</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination container mb-5 mt-2">
                {[...Array(pageCount).keys()].map((number) => (
                    <button
                        className='btn btn-secondary '
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Desert;