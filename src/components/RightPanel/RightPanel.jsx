import React from "react";
import "./RightPanel.css";

const RightPanel = () => {
  return (
    <div className="right-panel">
      <h3 className="right-panel-title">Notifications</h3>
      <div className="right-panel-box">New user signed up!</div>
      <div className="right-panel-box">Server status: Active</div>
    </div>
  );
};

export default RightPanel;
