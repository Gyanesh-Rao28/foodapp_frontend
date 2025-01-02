// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                <Link
                    to="/"
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;    