import React from "react";
import PropTypes from "prop-types";

const Field = ({ children }) => {
  return <div className="flex flex-col gap-[10px] mb-5">{children}</div>;
};

Field.propTypes = {
  children: PropTypes.node,
};

export default Field;
