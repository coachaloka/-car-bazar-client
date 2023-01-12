import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UseContext';


const PrivetRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    //loding condition
    if (loding) {
        // console.log("Loding runing");
        return <div className="flex items-center justify-center space-x-1 ">
            <progress className="progress h-1 progress-secondary"></progress>
        </div>
    }

    //   console.log(user, user?.uid)
    if (user && user?.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivetRoute;