import React from "react";
import PropTypes from "prop-types";

const CampTitle = ({ children, className = "font-semibold mb-1" }) => {
  return <h3 className={`text-neutralText1 ${className}`}>{children}</h3>;
};

CampTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CampTitle;
