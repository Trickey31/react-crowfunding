import React from "react";

const CampaignGrid = ({ children }) => {
  return <div className="grid grid-cols-4 gap-x-[30px]">{children}</div>;
};

export default CampaignGrid;
