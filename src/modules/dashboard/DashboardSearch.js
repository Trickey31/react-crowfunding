import React from "react";
import { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,213,213,0.15)] p-2 flex items-center">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do funrise now"
            className="bg-transparent w-full text-sm font-normal placeholder:text-neutralText4"
          />
        </div>
        <button className="bg-primary py-3 px-7 rounded-full">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2254_18026)">
              <path
                d="M16.9702 16.5L13.2202 12.75M15.0952 8.0625C15.0952 8.9243 14.9255 9.77766 14.5957 10.5739C14.2659 11.3701 13.7825 12.0935 13.1731 12.7029C12.5637 13.3123 11.8403 13.7957 11.0441 14.1255C10.2479 14.4553 9.39451 14.625 8.53271 14.625C7.67092 14.625 6.81755 14.4553 6.02135 14.1255C5.22516 13.7957 4.50171 13.3123 3.89233 12.7029C3.28294 12.0935 2.79955 11.3701 2.46976 10.5739C2.13996 9.77766 1.97021 8.9243 1.97021 8.0625C1.97021 6.32202 2.66162 4.65282 3.89233 3.42211C5.12303 2.1914 6.79223 1.5 8.53271 1.5C10.2732 1.5 11.9424 2.1914 13.1731 3.42211C14.4038 4.65282 15.0952 6.32202 15.0952 8.0625Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2254_18026">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0.470215)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="absolute w-full lg:w-[843px] bg-white left-0 z-50 rounded-[20px] translate-y-5">
          <div className="p-[10px] flex items-center justify-between">
            <h4 className="text-sm font-medium text-neutralText1 pl-4 underline">
              See all 10,124 fundraisier
            </h4>
            <button className="px-6 py-3 bg-error bg-opacity-20 text-error rounded-[10px]">
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
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-[15px] mb-6">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="text-neutralText1 text-sm font-semibold mb-4">
              Releted searchs
            </h3>
            <div className="flex flex-col gap-[10px] text-sm font-normal text-neutralText2">
              <p>education fund</p>
              <p>education fund</p>
              <p>education fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
function SearchItem() {
  return (
    <div className="flex items-center gap-5">
      <img
        src="https://images.unsplash.com/photo-1661577849879-470cbf27418f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
        className="w-[50px] h-[50px] rounded-[10px]"
      />
      <div className="flex-1 text-sm font-normal mb-1">
        <h3 className="text-neutralText1 ">
          <strong className="font-semibold">Education</strong> fund for Durgham
          Family
        </h3>
        <p className="text-neutralText3">By Durgham Family</p>
      </div>
    </div>
  );
}

export default DashboardSearch;
