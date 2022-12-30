import React from 'react';

const UserRow = ({user,setReload}) => {
    const {email,role}=user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
        })
        .then(res=>res.json())
        .then(data=>{
            setReload(true);
        })
    }
    
    return (
            <tr key={user?._id}>
                <td>{user?._id}</td>
                <td>{user?.email}</td>
                <td>
                    {role?'Admin':<button onClick={makeAdmin} className="btn btn-primary b-0">Make Admin</button>}
                </td>
            </tr>
    );
};

export default UserRow;