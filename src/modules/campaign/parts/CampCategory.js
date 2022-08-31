import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({ text = "Education", className = "text-xs" }) => {
  return (
    <Link
      to="/"
      className={`flex items-baseline gap-[10px] text-neutralText3 font-medium mb-4 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
