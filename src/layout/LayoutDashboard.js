import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ children }) => {
  return (
    <div>
      <DashboardTopbar></DashboardTopbar>
      <div>
        <DashboardSidebar></DashboardSidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
