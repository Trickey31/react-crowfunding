import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({ children, onClick }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100 text-sm text-neutralText2 font-medium"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Option;
