import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoader] = useAdmin(user?.email);

    const location = useLocation();

    if (loading || isAdminLoader) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;