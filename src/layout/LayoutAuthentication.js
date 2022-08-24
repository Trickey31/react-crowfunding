import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/error/ErrorComponent";

const LayoutAuthentication = ({ children, heading }) => {
  return (
    <div className="w-full min-h-screen bg-liteBG dark:bg-darkBG p-10 relative isolate">
      <img
        src="./ellipse.png"
        alt="bg"
        className="absolute hidden lg:block w-full bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-[60px]">
        <img srcSet="Logo.png 2x" alt="Logo" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-[10px] mx-auto">
        <div className="px-5 py-[30px] lg:px-[60px] lg:py-[50px]">
          <h1 className="text-lg lg:text-xl text-neutralText1 dark:text-white font-semibold text-center mb-[5px] lg:mb-[10px]">
            {heading}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
