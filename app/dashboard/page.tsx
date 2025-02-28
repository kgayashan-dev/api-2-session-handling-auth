import { getSession } from "../lib/session";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import { redirect } from "next/navigation"; // Import redirect

export default async function Dashboard() {
  const session = await getSession();
  const role = session?.role || "unknown"; // Default to "unknown" if no role is found

  console.log("Session in Dashboard:", session); // Debugging

  if (role === "admin") {
    return <AdminDashboard role={role} />;
  } else if (role === "user") {
    return <UserDashboard role={role} />;
  } else {
    redirect("/login"); // Use redirect function
  }
}
