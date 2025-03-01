// app/login/actions.ts

"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

const testUser = {
  id: "1",
  email: "admin@gmail.com",
  password: "12345678",
  role: "admin",
};

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(testUser.id, testUser.role); // Pass the role here
  redirect("/dashboard");
}
// export async function login(prevState: any, formData: FormData) {
//     const result = loginSchema.safeParse(Object.fromEntries(formData));
  
//     if (!result.success) {
//       return {
//         errors: result.error.flatten().fieldErrors,
//       };
//     }
  
//     const { email, password } = result.data;
  
//     try {
//       // Call the backend API to validate credentials
//       const response = await fetch("http://localhost:3000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         return {
//           errors: {
//             email: [errorData.message || "Invalid email or password"],
//           },
//         };
//       }
  
//       // Extract user data from the response
//       const user = await response.json();
  
//       // Create a session with the user data
//       await createSession(user.id, user.role);
  
//       // Redirect to the dashboard
//       redirect("/dashboard");
//     } catch (error) {
//       console.error("Login error:", error);
//       return {
//         errors: {
//           email: ["An error occurred. Please try again."],
//         },
//       };
//     }
//   }
  








export async function logout() {
  await deleteSession();
  redirect("/login");
}
