import { Button } from "components/button";
import React from "react";
import DashboardAvatar from "./DashboardAvatar";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-[54px] flex-1 pl-3">
        <img srcSet="./logo.png 2x" alt="logo" />
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-10">
        <DashboardFund></DashboardFund>
        <Button
          type="button"
          className="bg-secondary text-white font-semibold px-[26px]"
        >
          Start a campaign
        </Button>
        <DashboardAvatar></DashboardAvatar>
      </div>
    </div>
  );
};

export default DashboardTopbar;
