// src/pages/Register.jsx
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../features/auth/authSlice';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleRegister = async (formData) => {
    const resultAction = await dispatch(registerUser(formData));
    if (registerUser.fulfilled.match(resultAction)) {
      navigate('/menu');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="bg-accent p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-heading font-bold mb-6 text-background text-center">
          Register
        </h2>
        <RegisterForm onSubmit={handleRegister} loading={loading} />
        <p className="mt-4 text-center text-sm font-body text-background/80">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;