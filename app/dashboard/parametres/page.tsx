import { serverSesion } from "@/app/lib/serverSesion";
import React from "react";
import FormParam from "./formParam";
import { getUniqueProfileForUser } from "@/app/lib/fetchData";
async function Page() {
  const session = await serverSesion();
  const id = session?.user.id;
  const profile = await getUniqueProfileForUser(id);
  return <FormParam userId={id} profile={profile} />;
}

export default Page;
