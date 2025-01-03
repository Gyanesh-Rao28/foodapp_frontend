// src/components/layout/Header.jsx
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo using Raleway */}
          <Link to="/" className="font-display text-2xl font-bold text-primary">
            Food Delivery
          </Link>

          {/* Navigation using Poppins */}
          <nav className="font-body flex items-center space-x-6">
            <Link
              to="/menu"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Menu
            </Link>

            {token ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/orders"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Orders
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Cart ({items?.length || 0})
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition-colors"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
