import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm({});
  return (
    <div className="mb-[60px]">
      <h2 className="text-lg text-neutralText1 font-semibold mb-5">Support</h2>
      <div className="bg-white shadow-[-4px_4px_8px_rgba(226,226,226,0.2),_4px_4px_8px_rgba(226,226,226,0.2)] rounded-[10px] px-6 py-7">
        <h1 className="text-xl text-neutralText3 text-center font-medium mb-7">
          Pledge without reward
        </h1>
        <Input control={control} placeholder="$10"></Input>
        <div className="mt-8 bg-[#f6f6f6] p-5 text-sm rounded-[10px] mb-5">
          <p className="text-neutralText2 font-semibold mb-5">
            Back it because you believe in it.
          </p>
          <span className="text-neutralText3 font-normal">
            Support the project for no reward, just because it speaks to you.
          </span>
        </div>
        <Button kind="secondary" className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
