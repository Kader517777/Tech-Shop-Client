import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../Provider/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(userContext);

    if (user) {
        return children;
    }
    if (loader) {
        return <div className=" h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;