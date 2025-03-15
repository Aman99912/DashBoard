import React from "react";

import Sidebar from "../Sidebar/Sidebar.jsx";
import Navbar from "../Navbar/Navbra.jsx";
import RightPanel from "../RightPanel/RightPanel.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Navbar />
        <div className="dashboard-main">
          <h1 className="dashboard-text">Main Content Area</h1>
        </div>
      </div>
      <RightPanel />
    </div>
  );
};

export default Dashboard;
