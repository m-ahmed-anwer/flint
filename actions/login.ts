"use server";

import { loginSchema } from "@/lib/validations/login";

export async function login(state: any, formData: FormData) {
  const validation = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }
}
