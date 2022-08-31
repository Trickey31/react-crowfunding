import React from "react";
import PropTypes from "prop-types";

const CampImage = ({ className = "h-[158px]" }) => {
  return (
    <div className={className}>
      <img
        src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

CampImage.propTypes = {
  className: PropTypes.string,
};

export default CampImage;
