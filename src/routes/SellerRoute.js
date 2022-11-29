import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useSeller from '../Hook/useSeller';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoader] = useSeller(user?.email);

    const location = useLocation();

    if (loading || isSellerLoader) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default SellerRoute;