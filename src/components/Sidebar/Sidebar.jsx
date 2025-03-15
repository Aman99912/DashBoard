import React from "react";
import { Home, LayoutGrid, Settings } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li><Home size={20} /> Home</li>
        <li><LayoutGrid size={20} /> Analytics</li>
        <li><Settings size={20} /> Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
