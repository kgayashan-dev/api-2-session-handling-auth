// app/login/actions.ts

"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).trim(),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .trim(),
});

// app/login/actions.ts

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { username, password } = result.data;

  try {
    const response = await fetch("http://localhost:5246/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include", // Ensure cookies are sent
    });

    if (!response.ok) {
      return { errors: { username: ["Invalid username or password"] } };
    }

    const user = await response.json();
    await createSession(user.id, user.role);

    redirect("/dashboard");
  } catch (error) {
    return { errors: { username: ["An error occurred during login"] } };
  }
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
