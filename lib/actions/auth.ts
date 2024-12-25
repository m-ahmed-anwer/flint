// @lib/actions/auth.ts
"use server";
import { User } from "../../models/User";
import { createSession } from "@/lib/session";
import { loginSchema, signUpSchema } from "@/lib/validation/auth";
import bcrypt from "bcryptjs";
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

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({
      email: rawFormData.email,
    });
    if (existingUser) {
      return {
        status: "error",
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
      status: "error",
      message: "Invalid form data",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email: rawFormData.email });

    if (!user) {
      return {
        status: "error",
        message: "Email not found",
        errors: {
          email: ["Email not found"],
        },
      };
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(
      rawFormData.password as string,
      user.password
    );

    if (!isMatch) {
      return {
        status: "error",
        message: "Invalid password", // Generalized message for better security
        errors: {
          password: ["Invalid password"],
        },
      };
    }

    // Create a session
    await createSession(user._id.toString());

    return {
      status: "success",
      message: "Logged in successfully",
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
