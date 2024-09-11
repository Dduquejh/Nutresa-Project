import { Link } from 'react-router-dom';

export const ErrorComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/inicio" className="text-blue-500 hover:underline">
                Go back to Home Page
            </Link>
            <img 
                src="src\Images\Error.gif" 
                alt="Error" 
                className="mt-5 w-32 h-32 rounded-lg" 
                draggable="false"
            />
        </div>
    );
};
