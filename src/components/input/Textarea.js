import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({ placeholder = "", name, control, ...props }) => {
  const { field } = useController({ control, name });
  return (
    <textarea
      className="w-full border rounded-[10px] px-[25px] py-[15px] text-sm font-medium dark:text-white dark:bg-transparent placeholder:text-neutralText4 placeholder:font-medium dark:placeholder:text-neutralText3 resize-none min-h-[141px] outline-none mb-4"
      placeholder={placeholder}
      {...field}
      {...props}
    ></textarea>
  );
};

export default Textarea;
