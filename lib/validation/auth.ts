import * as z from "zod";

export const signUpSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Be at least 8 characters long")
      .regex(/[A-Z]/, "Contain at least one uppercase letter")
      .regex(/[a-z]/, "Contain at least one lowercase letter")
      .regex(/[0-9]/, "Contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Be at least 8 characters long")
    .regex(/[A-Z]/, "Contain at least one uppercase letter")
    .regex(/[a-z]/, "Contain at least one lowercase letter")
    .regex(/[0-9]/, "Contain at least one number"),
});

export type SignUpFormType = z.infer<typeof signUpSchema>;
export type LoginFormType = z.infer<typeof loginSchema>;
