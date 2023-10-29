import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/auth";
import { useNavigate } from "react-router-dom";

interface error {
  msg: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([] as error[]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    postal_code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(formData).then(() => navigate("/login"));
    } catch (err) {
      console.log("err");
      setIsLoading(false);

      const error = err as {
        response?: {
          data?: {
            errors?: [
              {
                msg: string;
              }
            ];
          };
        };
      };

      setErrors(
        error.response?.data?.errors ?? [{ msg: "Something went wrong" }]
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 sm:h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 rounded-xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        {errors.length > 0 ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error.msg}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="py-5 mb-6"></div>
        )}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
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
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="last_name"
            >
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
        </div>
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
        <div className="mb-6 relative">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password*
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none border-2"
            placeholder="********"
          />
          <div className="absolute right-4 top-10">
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
        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="postal_code"
          >
            Postal Code*
          </label>
          <input
            type="text"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            className="p-2 w-full border rounded-lg focus:border-blue-500 focus:outline-none border-2"
            placeholder="M1N 1N1"
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
