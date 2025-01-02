// src/components/auth/PublicRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
    const { token } = useSelector((state) => state.auth);

    if (token) {
        return <Navigate to="/menu" replace />;
    }

    return children;
};

export default PublicRoute;