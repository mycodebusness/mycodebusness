// import { serverSesion } from "@/app/lib/serverSesion";
import { Metadata } from "next";
import FormParam from "./formParam";
export const metadata: Metadata = {
  title: "parametres",
};
async function Page() {
  // const session = await serverSesion();
  // const id = session?.user.id || "";
  const id = "";
  // const profile = (await getUniqueProfileForUser(id)) || [];
  const profile = [];
  return <FormParam userId={id} profile={profile} />;
}

export default Page;
