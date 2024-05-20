import React from "react";
import type { Metadata } from "next";
// import { getProfileAll } from "../lib/fetchData";
import Content from "./content";
export const metadata: Metadata = {
  title: "dashboard",
};

async function Page() {
  // const users = await getProfileAll();
  const users = [];

  return (
    <div className="">
      <h1 className="text-2xl font-bold px-3 mt-3">Dashboard</h1>
      <h2 className="text-zinc-400 px-3">
        Tout sur tout le monde et sur vous même
      </h2>
      <div className="p-3">
        <div
          className="w-full h-44  rounded-md bg-center bg-cover flex flex-col justify-center px-4"
          style={{
            backgroundImage: "url(/nft-dashboard-art-6.jpg)",
          }}
        >
          <h2 className="font-bold text-3xl max-w-sm">
            Bienvenue sur votre tableau de bord
          </h2>
          <button className="py-2 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-44 mt-3">
            Voir ton profile
          </button>
        </div>
      </div>

      <Content users={users} />
    </div>
  );
}

export default Page;
