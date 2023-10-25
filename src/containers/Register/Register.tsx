import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    register(formData).then(() => navigate("/login"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 sm:h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-12 rounded-xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none border-2"
            placeholder="peter@email.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none border-2"
            placeholder="********"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="first_name"
          >
            First Name*
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none border-2"
            placeholder="Peter"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="last_name">
            Last Name*
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none border-2"
            placeholder="Parker"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white mb-6 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
        <div className="flex justify-center">
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
