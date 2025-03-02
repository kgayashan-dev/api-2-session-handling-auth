// app/dashboard/page.tsx

import { getSession } from "../lib/session";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();
  const role = session?.role || "unknown"; // Default to "unknown" if no role is found



  // Redirect to /login if no valid session or role is found
  if (!session || role === "unknown") {
    redirect("/login");
   
  }

  if (role === "Admin") {
    return <AdminDashboard role={role} />;
  } else if (role === "User") {
    return <UserDashboard role={role} />;
  }

  redirect("/login"); // Fallback for unknown roles
}
