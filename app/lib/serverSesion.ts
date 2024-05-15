import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function serverSesion() {
  return await getServerSession(authConfig);
}
