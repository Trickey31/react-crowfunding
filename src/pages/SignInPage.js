import { Button, ButtonGoogle } from "components/button";
import { Field } from "components/field";
import { Input, InputTogglePassword } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const schema = yup.object({
  email: yup.string().email("").required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-sm text-neutralText3 font-normal mb-[25px] lg:mb-[30px] text-center">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-primary font-medium">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter Password"
          ></InputTogglePassword>
        </Field>
        <div className="text-right">
          <span className="inline-block text-sm text-primary font-medium">
            Forgot password?
          </span>
        </div>
        <Button type="submit" className="w-full bg-primary mt-5">
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
