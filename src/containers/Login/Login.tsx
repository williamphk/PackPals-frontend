import React, { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "../../services/auth";
import { useUser } from "../../context/UserContext";

const Login: React.FC = () => {
  const { setUser } = useUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await login(formData);
    const user = {
      email: result.email,
      first_name: result.first_name,
      last_name: result.last_name,
      id: result.id,
    };
    setUser(user);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-12 rounded-xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-6">
          <label className="block font-medium mb-2" htmlFor="email">
            Email address*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            id="email"
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none border-2"
            placeholder="peter@email.com"
          />
        </div>
        <div className="mb-6">
          <label className="block font-medium mb-2" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            id="password"
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none height-12 border-2"
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white mb-6 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
        <div className="flex justify-center">
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
