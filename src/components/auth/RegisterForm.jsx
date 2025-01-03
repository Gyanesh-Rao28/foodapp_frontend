// src/components/layout/auth/RegisterForm.jsx
import { useState } from "react";

const RegisterForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="font-body text-sm font-medium text-background mb-1 block"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="font-body mt-1 block w-full rounded-md border border-secondary 
                     px-4 py-2.5 text-background placeholder-background/50
                     focus:border-primary focus:ring-1 focus:ring-primary 
                     transition-colors"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="font-body text-sm font-medium text-background mb-1 block"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="font-body mt-1 block w-full rounded-md border border-secondary 
                     px-4 py-2.5 text-background placeholder-background/50
                     focus:border-primary focus:ring-1 focus:ring-primary 
                     transition-colors"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-accent font-body py-3 px-4 rounded-md 
                   hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors text-base font-medium mt-2"
      >
        {loading ? "Creating account..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
