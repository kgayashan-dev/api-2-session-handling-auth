import { getSession } from "../lib/session";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import { redirect } from "next/navigation"; // Import redirect

export default async function Dashboard() {
  const session = await getSession();
  const role = session?.role || "unknown"; // Default to "unknown" if no role is found

  // Debugging: Log the session and role
  console.log("Session in Dashboard:", session);
  console.log("Role in Dashboard:", role);

  // Redirect to /login if no valid session or role is found
  if (!session || role === "unknown") {
    redirect("/login");
  }

  // Render the appropriate dashboard based on the role
  if (role === "admin") {
    return <AdminDashboard role={role} />;
  } else if (role === "user") {
    return <UserDashboard role={role} />;
  }

  // Fallback: Redirect to /login if the role is not recognized
  redirect("/login");
}