import { Button } from "components/button";
import Heading from "components/common/Heading";
import React from "react";
import { v4 } from "uuid";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
  return (
    <>
      <div
        className="gradient-banner h-[140px] bg-cover bg-no-repeat bg-center bg-opacity-40 rounded-[25px] flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `url(/banner.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-10 w-full max-w-[1066px] mb-[125px]">
        <div className="flex-1">
          <CampImage className="h-[400px] mb-[30px]"></CampImage>
          <div className="flex justify-center gap-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-[90px] h-[70px] rounded-[5px] object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <div className="flex items-center justify-between">
            <CampCategory></CampCategory>
            <div></div>
          </div>
          <CampTitle className="text-xl font-bold mb-4">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="text-sm mb-6">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] bg-[#EFEFEF] mb-6 rounded-full">
            <div className="w-2/3 h-full bg-primary rounded-full"></div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full">Back this project</Button>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-b-slate-100 bg-white p-8 mb-6">
        <div className="flex items-center gap-[60px]">
          <span className="text-secondary text-sm font-semibold">Campaign</span>
        </div>
        <Button className="px-9">Back this project</Button>
      </div>
      <div className="grid grid-cols-[1.2fr,0.9fr] gap-[124px] mb-[70px] px-8">
        <div>
          <h2 className="text-lg text-neutralText1 font-semibold mb-5">
            STORY
          </h2>
          <div className="bg-white w-full"></div>
          {/* <div>
            <CampaignStory></CampaignStory>
            <CampaignStory></CampaignStory>
            <CampaignStory></CampaignStory>
          </div> */}
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <CampaignPerk></CampaignPerk>
          <CampaignPerk></CampaignPerk>
          <CampaignPerk></CampaignPerk>
        </div>
      </div>
      <div>
        <Heading>You also may be interested in</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
    </>
  );
};

export default CampaignView;
