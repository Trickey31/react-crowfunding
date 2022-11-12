import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React from "react";
import { useSelector } from "react-redux";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(
    "🚀 ~ file: StartCampaignPage.js ~ line 7 ~ StartCampaignPage ~ user",
    user
  );

  return (
    <>
      <CampaignAddNew></CampaignAddNew>
    </>
  );
};

export default StartCampaignPage;
