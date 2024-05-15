import React from "react";
import { SidebarRight } from "../ui/dashboard";
import { getProfileProClavier } from "../lib/fetchData";
import { serverSesion } from "../lib/serverSesion";
import { Header } from "../ui/header";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await serverSesion();

  if (!session) {
    return redirect("/");
  }

  const users = await getProfileProClavier();

  return (
    <>
      <Header imageUrl={session?.user.image} name={session?.user.name} />
      <div className="flex flex-col md:flex-row">
        <div className="w-48 hidden lg:block shrink-0" />
        <div className=" grow ">{children}</div>
        <SidebarRight users={users} />
      </div>
    </>
  );
}
