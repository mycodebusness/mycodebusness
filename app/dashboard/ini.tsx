"use client";
import { usePathname } from "next/navigation";
import React from "react";

function Ini() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <p>usePathname:{JSON.stringify(pathname)}</p>
    </div>
  );
}

export default Ini;
