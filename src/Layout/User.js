import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import HeaderForUser from '../Shared/HeaderForUser';

const User = () => {
    return (
        <div>
            <HeaderForUser></HeaderForUser>
            <Outlet></Outlet>
        </div>
    );
};

export default User;