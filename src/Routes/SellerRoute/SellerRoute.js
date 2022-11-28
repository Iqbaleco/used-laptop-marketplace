import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSellerCheck from '../../Pages/CustomHooks/useSellerCheck/useSellerCheck';
import Spinner from '../../Shared/Spinner/Spinner';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [sellerCheck, isSellerLoading] = useSellerCheck(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Spinner></Spinner>
    }

    if (user && sellerCheck) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default SellerRoute;