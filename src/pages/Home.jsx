import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-display font-bold text-background text-center mb-6">
        Welcome to Food Delivery
      </h1>
      <p className="text-xl font-body text-background text-center mb-8">
        Order delicious Indian cuisine straight to your door
      </p>
      <div className="flex gap-4">
        <Link
          to="/menu"
          className="bg-primary text-accent font-body px-6 py-3 rounded-md hover:bg-primary-hover transition-colors"
        >
          View Menu
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold mb-2 text-background">
            Wide Selection
          </h3>
          <p className="font-body text-background/80">
            Choose from our extensive menu of authentic Indian dishes
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold mb-2 text-background">
            Fast Delivery
          </h3>
          <p className="font-body text-background/80">
            Quick and reliable delivery to your location
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold mb-2 text-background">
            Easy Ordering
          </h3>
          <p className="font-body text-background/80">
            Simple and secure online ordering process
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
