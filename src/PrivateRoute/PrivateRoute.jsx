import React from 'react';
import useHook from '../Hook/useHook';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading } = useHook()
    const location = useLocation();

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    }

    if (!user) {
        return <Navigate to='/SignIn' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;