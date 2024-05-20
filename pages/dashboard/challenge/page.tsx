import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "challenge",
};
function Page() {
  return (
    <div>
      <h2 className="text-2xl font-bold px-3 mt-3">Challenge</h2>
    </div>
  );
}

export default Page;
