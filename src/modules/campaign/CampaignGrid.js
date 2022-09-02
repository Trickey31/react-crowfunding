import React from "react";

const CampaignGrid = ({ children, type = "default" }) => {
  if (type !== "default")
    return <div className="grid grid-cols-1 gap-10">{children}</div>;
  return <div className="grid grid-cols-4 gap-x-[30px]">{children}</div>;
};

export default CampaignGrid;
