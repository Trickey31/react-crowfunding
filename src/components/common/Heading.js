import React from "react";

const Heading = ({ children, number = null }) => {
  return (
    <h2 className="text-lg text-neutralText1 font-semibold mb-5">
      {children}{" "}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default Heading;
