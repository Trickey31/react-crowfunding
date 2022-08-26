import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = ({
  name = "",
  type = "",
  placeholder = "",
  hasIcon = false,
  control,
  children,
  error = "",
  ...props
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={error.length > 0 ? "" : placeholder}
        className={`w-full border rounded-[10px] px-[25px] py-[15px] text-sm font-medium dark:text-white dark:bg-transparent placeholder:text-neutralText4 placeholder:font-medium dark:placeholder:text-neutralText3 ${
          error.length > 0
            ? "border-error text-error"
            : "text-neutralText1 border-whiteStroke dark:border-darkStroke"
        } ${hasIcon ? "py-5 pr-[60px] pl-5" : ""}`}
        {...field}
        {...props}
      />
      {error.length > 0 && (
        <span className="text-sm text-error font-medium absolute top-1/2 -translate-y-1/2 left-[25px] pointer-events-none error-input">
          {error}
        </span>
      )}
      {hasIcon ? (
        children ? (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer ">
            {children}
          </div>
        ) : null
      ) : null}
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  hasIcon: PropTypes.bool,
  children: PropTypes.node,
  error: PropTypes.string,
};

export default Input;
