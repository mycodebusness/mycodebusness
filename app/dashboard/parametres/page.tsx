import { serverSesion } from "@/app/lib/serverSesion";
import { Metadata } from "next";
import FormParam from "./formParam";
import { getUniqueProfileForUser } from "@/app/lib/fetchData";
export const metadata: Metadata = {
  title: "parametres",
};
async function Page() {
  const session = await serverSesion();
  const id = session?.user?.id ?? "";
  const profile = await getUniqueProfileForUser(id);

  return <FormParam userId={id} profile={profile} />;
}

export default Page;
