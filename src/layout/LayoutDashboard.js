import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import RequiredAuthPage from "pages/RequiredAuthPage";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <RequiredAuthPage>
      <div className="min-h-screen bg-liteBG p-10">
        <Overlay></Overlay>
        <ReactModal
          isOpen={false}
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
          className="modal-content w-full max-w-[521px] bg-white relative rounded-[20px] outline-none max-h-[90vh] overflow-y-auto scroll-hidden"
        >
          <button className="absolute top-4 right-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="px-10 py-12">
            <h2 className="text-neutralText1 text-[25px] font-bold mb-[50px] text-center">
              Back this project
            </h2>
            <p className="text-neutralText2 text-sm font-medium mb-[10px]">
              Enter the contribute amount
            </p>
            <input
              type="text"
              placeholder="$10"
              className="w-full border border-whiteStroke px-[25px] py-[15px] rounded-[10px]"
            ></input>
            <p className="text-neutralText3 text-sm font-normal my-5">
              Contribution are not associatied with perks
            </p>
            <Button className="px-11 py-3">Continue</Button>
            <div className="mb-[60px]"></div>
            <CampaignPerk showButton></CampaignPerk>
          </div>
        </ReactModal>
        <DashboardTopbar></DashboardTopbar>
        <div className="flex items-start gap-10">
          <DashboardSidebar></DashboardSidebar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </RequiredAuthPage>
  );
};

export default LayoutDashboard;
