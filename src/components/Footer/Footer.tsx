import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 py-6 mt-0.5 dark:bg-gray-950 dark:text-white transition-colors duration-200">
      <div className="container mx-auto text-center">
        <p className="mb-4 font-bold text-xl">PackPals</p>

        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Term of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Copyright
            </a>
          </li>
        </ul>
        <p>Copyright © 2023, William Poon</p>
      </div>
    </footer>
  );
};

export default Footer;
