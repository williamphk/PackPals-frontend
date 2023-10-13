import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 py-6 mt-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 font-bold text-xl">PackPals</p>
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
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
      </div>
    </footer>
  );
};

export default Footer;
