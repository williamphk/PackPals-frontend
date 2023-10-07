import React from "react";
import "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header>
        <div className="logo">PackPals</div>
        <nav>
          <button>Profile</button>
          <button>Logout</button>
        </nav>
      </header>

      <section className="create-match">
        <h2>Create Match</h2>
        <div className="input-group">
          <label>Interested Item:</label>
          <input
            type="text"
            placeholder="Enter the product or deal you're interested in..."
          />
          <button>Find Matches</button>
        </div>
      </section>

      <section className="matches-section">
        <div className="match-category newly-matched">
          <h3>Newly Matched</h3>
          <ul>
            <li>User name</li>
            <li>User name</li>
            <li>User name</li>
            <li>User name</li>
          </ul>
          <button>See more</button>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <span>© PackPals</span>
          <ul>
            <li>About</li>
            <li>Term of Use</li>
            <li>Privacy</li>
            <li>Copyright</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
