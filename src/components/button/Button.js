import React from "react";
import PropTypes from "prop-types";
import { Loading } from "components/loading";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...props
}) => {
  const child = !!isLoading ? <Loading></Loading> : children;
  return (
    <button
      type={type}
      className={`py-[13px] font-semibold rounded-[10px] flex items-center justify-center min-h-[52px] ${
        !!isLoading ? "opacity-50" : ""
      } ${className}`}
      {...props}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
