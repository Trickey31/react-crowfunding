import { Button } from "components/button";
import React from "react";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-[-4px_4px_8px_rgba(226,226,226,0.2),_4px_4px_8px_rgba(226,226,226,0.2)] rounded-[10px] mb-[30px]">
        <div>
          <img
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[232px] object-cover rounded-[10px]"
          />
        </div>
        <div className="p-5">
          <div className="inline-block px-4 py-1 bg-secondary text-white text-xs font-medium rounded-[2px] mb-5">
            Featured
          </div>
          <div className="flex flex-col gap-[15px]">
            <div>
              <h3 className="text-xl font-semibold text-neutralText1">
                Special One Camera
              </h3>
              <div className="flex items-center gap-[10px]">
                <h3 className="text-xl font-semibold text-neutralText1">
                  $2,724 USD
                </h3>
                <p className="text-sm font-medium text-error">
                  $1,504 USD (12% OFF)
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-neutralText1">
                Estimated Shipping
              </p>
              <p className="text-sm text-neutralText2 font-normal">
                October 2022
              </p>
            </div>
            <span className="text-sm font-medium text-neutralText2">
              <strong className="text-neutralText1">05</strong> claimed
            </span>
            <span className="text-sm text-neutralText2 font-normal">
              Ships worldwide
            </span>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="bg-secondary text-white w-full">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
