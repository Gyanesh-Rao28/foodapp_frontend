// src/components/layout/auth/LoginForm.jsx
import { useState } from "react";

const LoginForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="font-body text-sm font-medium text-gray-700 mb-1 block"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="font-body mt-1 block w-full rounded-md border border-secondary 
                     px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary 
                     transition-colors"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="font-body text-sm font-medium text-gray-700 mb-1 block"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="font-body mt-1 block w-full rounded-md border border-secondary 
                     px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary 
                     transition-colors"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="font-body w-full bg-primary text-white py-3 px-4 rounded-md 
                   hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors text-base font-medium mt-2"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
