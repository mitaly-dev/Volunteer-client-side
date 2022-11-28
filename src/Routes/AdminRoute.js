import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loadingpage from '../Components/Loadingpage';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({children}) => {
    const location =useLocation()
    const {user,loading,logOut} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)

    if(loading || isAdminLoading){
        return <Loadingpage></Loadingpage>
    }
    if(isAdmin){
        return children
    }
    logOut()
    return <Navigate to="/user/login" state={{from : location}} replace></Navigate>
   
};

export default AdminRoute;