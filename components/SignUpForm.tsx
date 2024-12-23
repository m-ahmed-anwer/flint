"use client";

import { signUpSchema, type SignUpFormType } from "@/lib/validation/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { handleSignUp } from "@/lib/actions/auth";

const initialState = {
  errors: {},
  message: "",
};

const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [state, formAction, pending] = useActionState(
    handleSignUp,
    initialState
  );

  return (
    <form action={formAction} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {state?.errors?.firstName && (
          <p className="text-red-500 text-sm">{state.errors.firstName[0]}</p>
        )}
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {state?.errors?.lastName && (
          <p className="text-red-500 text-sm">{state.errors.lastName[0]}</p>
        )}
      </div>

      <div className="col-span-6">
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {state?.errors?.phone && (
          <p className="text-red-500 text-sm">{state.errors.phone[0]}</p>
        )}
      </div>

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

      <div className="col-span-6 sm:col-span-3">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
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

      <div className="col-span-6 sm:col-span-3">
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {state?.errors?.confirmPassword && (
          <p className="text-red-500 text-sm">
            {state.errors.confirmPassword[0]}
          </p>
        )}
      </div>

      <div className="col-span-6">
        <Button
          aria-disabled={pending}
          type="submit"
          className="w-full h-12 text-lg">
          {pending ? "Loading..." : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
