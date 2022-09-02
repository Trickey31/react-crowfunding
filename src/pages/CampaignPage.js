import { Button } from "components/button";
import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React from "react";

const CampaignPage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-8">
        <div className="flex items-start gap-4 lg:gap-6 rounded-[20px] bg-white">
          <button>
            <svg
              width={54}
              height={54}
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={54} height={54} rx={27} fill="#A992FE" />
              <path
                d="M27 20V34"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 27H34"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex flex-col flex-1 gap-2">
            <h3 className="text-neutralText1 text-sm lg:text-[22px] font-semibold">
              Create Your Campaign
            </h3>
            <p className="text-neutralText3 text-xs lg:text-sm font-normal">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-primary text-xs lg:text-sm font-normal">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button kind="ghost" href="/start-campaign" className="px-[30px]">
          Create campaign
        </Button>
      </div>
      <Gap></Gap>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <Gap></Gap>
      <Button kind="ghost" className="mx-auto px-14">
        See more+
      </Button>
    </>
  );
};

export default CampaignPage;
