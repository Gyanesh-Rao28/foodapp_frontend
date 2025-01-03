import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="relative w-full h-64 mb-8">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Indian cuisine banner"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-4xl font-display font-bold text-center mb-6">
              Welcome to Food Delivery
            </h1>
            <p className="text-xl font-body text-center mb-8">
              Order delicious Indian cuisine straight to your door
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-12">
        <Link
          to="/menu"
          className="bg-primary text-accent font-body px-6 py-3 rounded-md hover:bg-primary-hover transition-colors"
        >
          View Menu
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="text-center">
          <div className="mb-4 h-48 relative">
            <img
              src="https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Wide selection of dishes"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-heading font-semibold mb-2 text-background">
            Wide Selection
          </h3>
          <p className="font-body text-background/80">
            Choose from our extensive menu of authentic Indian dishes
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4 h-48 relative">
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fast delivery service"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-heading font-semibold mb-2 text-background">
            Fast Delivery
          </h3>
          <p className="font-body text-background/80">
            Quick and reliable delivery to your location
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4 h-48 relative">
            <img
              src="https://images.unsplash.com/photo-1616995797463-9e67aa01bc7a?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Easy ordering process"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
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
