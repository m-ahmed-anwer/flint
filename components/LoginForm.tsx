"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { handleLogin } from "@/lib/actions/auth-actions";
import toast from "react-hot-toast";

interface ILoginForm {
  errors: {
    email?: string[];
    password?: string[];
  };
  message: string;
  status: string;
  loginError: boolean;
}

const initialState: ILoginForm = {
  errors: {},
  message: "",
  status: "",
  loginError: false,
};

const LoginForm = () => {
  const [state, formAction, pending] = useActionState(
    handleLogin,
    initialState
  );
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form action={formAction} className="mt-8 grid grid-cols-6 gap-6 ">
      <div className="col-span-6">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="col-span-6 relative">
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-[10px] text-gray-500 text-xl">
          {showPassword ? "🙈" : "👁️"}
        </button>
        {state?.errors?.password && (
          <div className="text-sm text-red-500">
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {state?.loginError && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}

      <div className="col-span-6">
        <Button
          disabled={pending}
          type="submit"
          className="w-full h-12 text-lg">
          {pending ? "Loading..." : "Log In"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
