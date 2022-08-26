import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/error/ErrorComponent";

const ButtonGoogle = ({ text = "", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center gap-[10px] w-full border border-whiteStroke dark:border-darkStroke rounded-[10px] py-[13px] mb-5"
      onClick={onClick}
    >
      <img srcSet="./google.png 2x" alt="icon-google" />
      <span className="font-semibold text-neutralText2 dark:text-white">
        {text}
      </span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
