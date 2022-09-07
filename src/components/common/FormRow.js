import React from "react";

const FormRow = ({ children }) => {
  return <div className="grid grid-cols-2 gap-x-[45px] mb-4">{children}</div>;
};

export default FormRow;
