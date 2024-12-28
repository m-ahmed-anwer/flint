// @lib/actions/auth-actions.ts
"use server";

import { signIn } from "@/auth";
import { loginSchema, signUpSchema } from "@/lib/validation/auth";
import { AuthError, CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

export async function handleSignUp(prevState: any, formData: FormData) {
  // Extract the form data
  const rawFormData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  // Validate the form data
  const result = signUpSchema.safeParse(rawFormData);

  if (!result.success) {
    return {
      status: "error",
      errors: result.error.flatten().fieldErrors,
      message: "Invalid form data",
    };
  }

  const response = await fetch(`http://localhost:3000/api/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: rawFormData.email,
      password: rawFormData.password,
      firstName: rawFormData.firstName,
      lastName: rawFormData.lastName,
      phone: rawFormData.phone,
    }),
  });

  if (response.ok) {
    redirect("/login");
  } else {
    const data = await response.json();
    return {
      status: "error",
      message: data.message,
    };
  }
}

export async function handleLogin(prevState: any, formData: FormData) {
  // Extract the form data
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Validate the form data
  const result = loginSchema.safeParse(rawFormData);

  if (!result.success) {
    return {
      status: "error",
      message: "Invalid form data",
      errors: result.error.flatten().fieldErrors,
      loginError: false,
    };
  }

  await signIn("credentials", {
    email: rawFormData.email,
    password: rawFormData.password,
    redirect: true,
    redirectTo: "/",
  });
}
