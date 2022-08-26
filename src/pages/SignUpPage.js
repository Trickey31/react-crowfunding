import { Checkbox } from "components/checkbox";
import { Field } from "components/field";
import { Input, InputTogglePassword } from "components/input";
import { Label } from "components/label";
import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { useForm } from "react-hook-form";
import { Button, ButtonGoogle } from "components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/error/ErrorComponent";
import useToggleValue from "hooks/useToggleValue";

const schema = yup.object({
  name: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const handleSignUp = (values) => {};
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-sm text-neutralText3 font-normal mb-[25px] lg:mb-[30px] text-center">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
      <p className="text-xs text-neutralText2 dark:text-white text-center font-normal mb-[15px] lg:mb-[30px]">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            type="text"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password *</Label>
          <InputTogglePassword
            control={control}
            error={errors.password?.message}
            placeholder="Create a password"
          ></InputTogglePassword>
        </Field>
        <div className="flex items-start gap-5 mb-5">
          <Checkbox
            name="term"
            checked={acceptTerm}
            onClick={handleToggleTerm}
          ></Checkbox>
          <p className="text-xs lg:text-sm text-neutralText2 dark:text-neutralText3 font-normal flex-1">
            I agree to the{" "}
            <span className="text-secondary underline">Tearms of Use</span> and
            have read and understand the{" "}
            <span className="text-secondary underline">Privacy policy</span>.
          </p>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default withErrorBoundary(SignUpPage, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
