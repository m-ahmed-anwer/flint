"use client";

import React, { useActionState, useState } from "react";
import { Button } from "./ui/button";
import { login } from "@/actions/login";

const initialState = {
  errors: {},
  message: "",
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, pending] = useActionState(login, initialState);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action={action}>
      <div className="mt-6">
        <div className="space-y-4">
          <div>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="border rounded-lg p-2 w-full mb-1"
            />
            {state?.errors?.email && (
              <p className="text-red-600">{state.errors.email}</p>
            )}
          </div>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="border rounded-lg p-2 w-full mb-1 "
            />
            {state?.errors?.email && (
              <p className="text-red-600">{state.errors.password}</p>
            )}
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-2 top-2"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <Button disabled={pending} className="w-full">
            {pending ? "Submiting" : "Login"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
