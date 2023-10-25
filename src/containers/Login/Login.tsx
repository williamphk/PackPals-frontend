import React, { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "../../services/auth";
import { useUser } from "../../context/UserContext";

const Login: React.FC = () => {
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
    setIsLoading(true);
    try {
      const result = await login(formData);
      const user = {
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
        id: result.id,
      };
      setUser(user);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      const error = err as {
        response?: {
          data?: {
            message?: string;
          };
        };
      };

      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleLoginWithTestAccount = async () => {
    setIsLoading(true);
    try {
      const result = await login({
        email: "test@test.com",
        password: "Test",
      });
      const user = {
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
        id: result.id,
      };
      setUser(user);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      const error = err as {
        response?: {
          data?: {
            message?: string;
          };
        };
      };

      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-12 rounded-xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6">
            <p>{error}</p>
          </div>
        ) : (
          <div className="py-5 mb-6"></div>
        )}
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
        <div className="mb-6 relative">
          <label className="block font-medium mb-2" htmlFor="password">
            Password*
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            id="password"
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none height-12 border-2"
            placeholder="********"
          />
          <div className="absolute right-4 top-11">
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <span className="material-symbols-outlined text-gray-500">
                {isPasswordVisible ? "visibility" : "visibility_off"}
              </span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white mb-6 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>

        <div className="flex justify-center">
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 mb-3"
          >
            Don't have an account?
          </Link>
        </div>
        <button
          type="button"
          onClick={handleLoginWithTestAccount}
          className="text-gray-500 hover:text-gray-700 w-full text-decoration-line: underline"
        >
          Login with Test Account
        </button>
      </form>
    </div>
  );
};

export default Login;
