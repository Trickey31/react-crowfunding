import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-[30px] w-full max-w-[1048px]">
      <CampImage className="flex-1 h-[266px]"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory></CampCategory>
        <CampTitle className="text-xl font-bold mb-4">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] bg-[#EFEFEF] mb-6 rounded-full">
          <div className="w-2/3 h-full bg-primary rounded-full"></div>
        </div>
        <div className="flex items-center justify-between">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
