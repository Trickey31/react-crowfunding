import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardAvatar from "./parts/DashboardAvatar";
import DashboardFund from "./parts/DashboardFund";
import DashboardSearch from "./parts/DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-[54px] flex-1 pl-3">
        <Link to="/" className="inline-block">
          <img srcSet="./logo.png 2x" alt="logo" />
        </Link>
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-10">
        <DashboardFund></DashboardFund>
        <Button
          kind="secondary"
          href="/start-campaign"
          className="font-semibold px-[26px]"
        >
          Start a campaign
        </Button>
        <DashboardAvatar></DashboardAvatar>
      </div>
    </div>
  );
};

export default DashboardTopbar;
