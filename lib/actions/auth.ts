"use server";
import { User } from "../../models/User";
import { createSession } from "@/lib/session";
import connectToDatabase from "../mogoose";
import { loginSchema, signUpSchema } from "@/lib/validation/auth";
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
      errors: result.error.flatten().fieldErrors,
      message: "Invalid form data",
    };
  }

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({
      email: rawFormData.email,
    });
    if (existingUser) {
      return {
        message: "Email already exists",
        errors: {
          email: ["This email is already registered"],
        },
      };
    }

    // Create the new user
    const user = new User({
      firstName: rawFormData.firstName,
      lastName: rawFormData.lastName,
      phone: rawFormData.phone,
      email: rawFormData.email,
      password: rawFormData.password,
    });

    // Save the user to the database
    await user.save();

    // Create a session
    await createSession(user._id.toString());

    return {
      status: "success",
      message: "Account created successfully!",
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Something went wrong",
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
      errors: result.error.flatten().fieldErrors,
      message: "Invalid form data",
      status: "error",
    };
  }

  return {
    status: "success",
    message: "Account created successfully!",
  };
}
