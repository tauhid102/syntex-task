import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import UserRow from './UserRow';

const AllUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://syntex-server.up.railway.app/user')
            .then(res => {
                console.log('status',res);
                return res.json()})
            .then(data => setUsers(data))
    }, [users]);
    return (
        <div className="container mt-5">
            <h1 className="text-center">All Users Are Here</h1>
            <div className="table-responsive">
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <UserRow
                                key={user?._id}
                                user={user}
                                setReload
                            ></UserRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;