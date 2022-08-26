import { IconEyeToggle } from "components/icons";
import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import useToggleValue from "hooks/useToggleValue";

const InputTogglePassword = ({ control, error = "", placeholder = "" }) => {
  const { value: togglePassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <>
      <Input
        name="password"
        type={togglePassword ? "text" : "password"}
        placeholder={placeholder}
        control={control}
        error={error}
        hasIcon
      >
        <IconEyeToggle
          open={togglePassword}
          onClick={handleTogglePassword}
        ></IconEyeToggle>
      </Input>
    </>
  );
};

InputTogglePassword.propTypes = {
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputTogglePassword;
