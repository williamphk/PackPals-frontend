import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-white transition-colors duration-200 shadow-md min-h-screen">
      <h1 className="text-3xl font-bold mb-6">About PackPals</h1>

      <section className="mb-6">
        <h2 className="text-2xl mb-3">The Story</h2>
        <p className="text-lg">
          PackPals was born out of a simple idea: connecting people looking for
          similar products or deals. In today's fast-paced world, I realized
          that collaboration and connection are more important than ever. By
          leveraging the power of community, PackPals aims to make finding deals
          and products a shared experience. It is also built as of my capstone
          project for my study in Web Development at Humber College.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-3">How It's Built</h2>
        <p className="text-lg">
          I have come through a complete development cycle of PackPals, from
          writing requirements, designing wireframe, propotying, implementing,
          testing, and deploying.
        </p>
        <p className="text-lg">
          PackPals is crafted using modern web technologies, ensuring a seamless
          experience across all devices. I leverage React for a dynamic
          frontend, with a backend powered by Node.js. TailwindCSS provides the
          sleek, user-friendly interface, and MongoDB stores user data securely.
          It is also the first time for me to use TypeScript in both frontend
          and backend. The type and interface is kind of confusing at the
          beginning, but it is really helpful to catch bugs and make the code
          more readable. It also includes the feastures that I am implementing
          for the first time, such as Dark Mode, Refresh Token, Realtime
          Notification with Socket.io, and more.
        </p>
        <p className="text-lg">
          You can find the source code on{" "}
          <Link
            to="https://github.com/williamphk/PackPals-frontend"
            className="text-blue-600 dark:text-blue-300"
          >
            Frontend
          </Link>{" "}
          and{" "}
          <Link
            to="https://github.com/williamphk/PackPals-backend"
            className="text-blue-600 dark:text-blue-300"
          >
            Backend
          </Link>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-3">The Team</h2>
        <p className="text-lg">
          PackPals was developed my me, William Poon. Check out my portfolio and
          other fun applications:{" "}
          <Link
            to="https://www.williamphk.com"
            className="text-blue-600 dark:text-blue-300"
          >
            Here
          </Link>
          . Feel free to connect with me on LinkedIn!
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-3">How to Use</h2>
        <p className="text-lg">Using PackPals is straightforward:</p>
        <ol className="list-decimal pl-5 mt-3">
          <li className="mb-2">Register or login to your PackPals account.</li>
          <li className="mb-2">
            Search for a product or deal you're interested in.
          </li>
          <li className="mb-2">View potential matches or host your own.</li>
          <li className="mb-2">
            Connect with other users to discuss further details.
          </li>
          <li>Enjoy the power of community-driven shopping!</li>
        </ol>
      </section>
    </div>
  );
};

export default About;
