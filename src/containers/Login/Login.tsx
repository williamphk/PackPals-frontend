import React, { useState } from "react";
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
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            id="email"
            className="p-2 w-full border rounded focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            id="password"
            className="p-2 w-full border rounded focus:border-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
