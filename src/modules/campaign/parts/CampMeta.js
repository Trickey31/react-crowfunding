import React from "react";
import PropTypes from "prop-types";

const CampMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={`text-neutralText2 ${
          size === "small" ? "text-sm font-semibold" : "text-xl font-bold"
        }`}
      >
        {amount}
      </span>
      <span
        className={`text-neutralText4 ${
          size === "small" ? "text-xs font-normal" : "font-normal"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

CampMeta.propTypes = {
  amount: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
};

export default CampMeta;
