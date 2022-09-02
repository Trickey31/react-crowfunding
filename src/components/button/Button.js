import React from "react";
import PropTypes from "prop-types";
import { Loading } from "components/loading";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  kind = "primary",
  href,
  ...props
}) => {
  let defaultClassName =
    "py-[13px] font-semibold rounded-[10px] flex items-center justify-center min-h-[52px]";
  const child = !!isLoading ? <Loading></Loading> : children;
  switch (kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }
  if (href)
    return (
      <Link to={href} className={`${defaultClassName} ${className}`}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      className={`${defaultClassName} ${
        !!isLoading ? "opacity-50" : ""
      } ${className}`}
      {...props}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  href: PropTypes.string,
};

export default Button;
