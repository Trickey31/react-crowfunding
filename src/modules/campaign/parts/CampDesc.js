import React from "react";
import PropTypes from "prop-types";

const CampDesc = ({ children, className = "text-xs" }) => {
  return (
    <p className={`text-neutralText3 font-normal mb-4 ${className}`}>
      {children}
    </p>
  );
};

CampDesc.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CampDesc;
