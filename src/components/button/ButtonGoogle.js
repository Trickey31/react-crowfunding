import React from "react";

const ButtonGoogle = ({ text }) => {
  return (
    <button className="flex items-center justify-center gap-[10px] w-full border border-whiteStroke dark:border-darkStroke rounded-[10px] py-[13px] mb-5">
      <img srcSet="./google.png 2x" alt="icon-google" />
      <span className="font-semibold text-neutralText2 dark:text-white">
        {text}
      </span>
    </button>
  );
};

export default ButtonGoogle;
