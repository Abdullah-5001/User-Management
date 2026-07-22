import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  // console.log(session);
  if (!session) redirect("/login");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Login Successful</p>
    </div>
  );
}
