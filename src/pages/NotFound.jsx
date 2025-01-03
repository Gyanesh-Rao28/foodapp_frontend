import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-heading font-semibold mb-4 text-background">
          Page Not Found
        </h2>
        <p className="font-body text-background/80 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-accent font-body px-6 py-3 rounded-md hover:bg-primary-hover transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
