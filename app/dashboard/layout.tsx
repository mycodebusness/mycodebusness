import { redirect } from "next/navigation";
import React from "react";
import { getProfileProClavier } from "../lib/fetchData";
import { serverSesion } from "../lib/serverSesion";
import { SidebarRight } from "../ui/dashboard";
import { Header } from "../ui/header";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await serverSesion()) || { user: { image: "", name: "" } };

  if (!session) {
    return redirect("/api/auth/signin");
  }

  const users = (await getProfileProClavier()) || [
    {
      id: "",
      email: "",
      createdAt: new Date().toString(),
      image: "",
      name: "",
    },
  ];

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
