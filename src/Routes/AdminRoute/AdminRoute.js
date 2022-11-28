import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdminCheck from "../../Pages/CustomHooks/useAdminCheck/useAdminCheck";
import Spinner from "../../Shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [adminCheck, isAdminLoading] = useAdminCheck(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }

    if (user && adminCheck) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;