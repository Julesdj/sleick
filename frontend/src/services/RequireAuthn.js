import React from 'react';
import authn from './authnService';
import { useLocation, Navigate } from 'react-router-dom';

function RequireAuthn({ children }) {
    let user = authn.getCurrentUser();
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuthn;
