// src/pages/Login.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleLogin = async (formData) => {
    const result = await dispatch(loginUser(formData));
    if (loginUser.fulfilled.match(result)) {
      navigate("/menu");
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="bg-accent p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-heading font-bold mb-6 text-background text-center">
          Login
        </h2>
        <LoginForm onSubmit={handleLogin} loading={loading} />
        <p className="mt-4 text-center text-sm font-body text-background/80">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
