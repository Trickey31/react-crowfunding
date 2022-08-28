import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen bg-liteBG p-10">
      <DashboardTopbar></DashboardTopbar>
      <div>
        <DashboardSidebar></DashboardSidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
