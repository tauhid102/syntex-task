import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h5>{user?.email}</h5>
            <h5>{user?.displayname}</h5>
        </div>
    );
};

export default UserProfile;