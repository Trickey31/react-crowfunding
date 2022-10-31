import axios from "axios";
import { imgbbAPI } from "config/config";
import React from "react";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    const imgData = response.data.data;
    if (!imgData) return;
    const imgObj = {
      thumb: imgData.thumb.url,
      main: imgData.url,
    };
    onChange(name, imgObj);
  };
  return (
    <label className="h-[200px] w-full border border-gray-200 rounded-[10px] cursor-pointer flex items-center justify-center">
      <input type="file" className="hidden" onChange={handleUploadImage} />
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
          />
        </svg>
      </span>
    </label>
  );
};

export default ImageUpload;
