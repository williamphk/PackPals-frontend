import React from "react";
import { Link } from "react-router-dom";
import screenshot from "../../assets/screenshot.png";
import bulk from "../../assets/bulk.jpeg";
import neighbors from "../../assets/neighbors.jpeg";
import waste from "../../assets/waste.jpeg";

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center m-6">
      <section className="p-10 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col items-center sm:items-start sm:justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Welcome to PackPals
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              In an era of rising costs, PackPals is your community's answer to
              financial resilience and sustainability. By connecting neighbors
              for bulk purchases, we not only offer savings but also reduce
              wastage and strengthen community ties.
            </p>
            <Link to="/register">
              <button className="px-5 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Join the Movement
              </button>
            </Link>
          </div>
          <div className="text-center text-gray-400">
            <img
              src={screenshot}
              alt="Platform Screenshot"
              className="rounded-xl w-[100vw] min-w-[50vw] border-2 border-gray-200"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <img
            src={bulk}
            alt="Buy in Bulk"
            className="h-52 w-52 bg-gray-200 rounded-lg mb-4"
          />
          <p className="text-lg text-gray-600 text-center">
            Collaborate on bulk purchases and unlock incredible savings without
            the pitfalls of over-buying.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <img
            src={neighbors}
            alt="Connect with Neighbors"
            className="h-52 w-52 bg-gray-200 rounded-lg mb-4"
          />
          <p className="text-lg text-gray-600 text-center">
            Strengthen your bond with neighbors and foster a supportive,
            trust-filled community environment.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <img
            src={waste}
            alt="Reduce Waste"
            className="h-52 w-52 bg-gray-200 rounded-lg mb-4"
          />
          <p className="text-lg text-gray-600 text-center">
            Reduce waste, promote sustainability, and champion a culture of
            shared resources and collective well-being.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
