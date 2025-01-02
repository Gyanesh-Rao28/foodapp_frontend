
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Food Delivery
      </h1>
      <p className="text-xl text-gray-600 text-center mb-8">
        Order delicious Indian cuisine straight to your door
      </p>
      <div className="flex gap-4">
        <Link
          to="/menu"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
        >
          View Menu
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-600">
            Choose from our extensive menu of authentic Indian dishes
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Quick and reliable delivery to your location
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Easy Ordering</h3>
          <p className="text-gray-600">
            Simple and secure online ordering process
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;