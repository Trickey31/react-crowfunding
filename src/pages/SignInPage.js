import { Button, ButtonGoogle } from "components/button";
import { Field } from "components/field";
import { Input, InputTogglePassword } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const {
    control,
    formState: { errors },
  } = useForm({});
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-sm text-neutralText3 font-normal mb-[25px] lg:mb-[30px] text-center">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-primary font-medium">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form>
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
          ></InputTogglePassword>
        </Field>
        <span className="text-sm text-primary font-medium">
          Forgot password?
        </span>
        <Button type="submit" className="w-full bg-primary mt-5">
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
