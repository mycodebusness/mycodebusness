"use client";
import Link from "next/link";

import React from "react";
import { usePathname } from "next/navigation";
import { FcHome } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcFactory } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";

export function SidebarLeft() {
  const linksNav = [
    {
      name: "Dashboard",
      icon: <FcHome className="w-full h-auto" />,
      activelink: "/dashboard",
    },
    {
      name: "Apprendre",
      icon: <FcIdea className="w-full h-auto" />,
      activelink: "/dashboard/apprendre",
    },
    {
      name: "Challenge",
      icon: <FcComboChart className="w-full h-auto" />,
      activelink: "/dashboard/challenge",
    },
    {
      name: "Plan Etude",
      icon: <FcFactory className="w-full h-auto" />,
      activelink: "/dashboard/plan",
    },
    {
      name: "Projets & Outils",
      icon: <FcCurrencyExchange className="w-full h-auto" />,
      activelink: "/dashboard/outils",
    },
    {
      name: "Paramètres",
      icon: <FcEngineering className="w-full h-auto" />,
      activelink: "/dashboard/parametres",
    },
  ];
  const pathname = usePathname();

  return (
    <ul className="relative h-auto w-full flex flex-row items-center  lg:space-y-8 overflow-x-auto lg:flex lg:h-screen lg:flex-col lg:justify-between lg:w-48 lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:pt-20 lg:pb-3 lg:items-start">
      {linksNav.map(({ name, icon, activelink }) => (
        <li key={name} className="relative grow">
          {pathname == activelink ? (
            <div className="absolute -left-1 top-0 bg-blue-600 w-2 h-8 rounded-full max-md:hidden" />
          ) : null}
          <Link href={activelink} className="pl-4 flex items-center">
            <span
              className={`w-8 h-8w-8 h-8 grid place-items-center mr-2 rounded-md ${
                pathname == activelink ? "bg-blue-600" : "bg-transparent"
              }`}
            >
              {icon}
            </span>
            <span
              className={`hidden lg:inline-block ${
                pathname == activelink ? "font-bold" : ""
              }`}
            >
              {name}
            </span>
          </Link>
        </li>
      ))}
      <li key="condition" className="hidden sm:block sm:relative sm:grow">
        {pathname == "/dashboard/conditions" ? (
          <div className="absolute -left-1 top-0 bg-blue-600 w-2 h-8 rounded-full max-md:hidden" />
        ) : null}
        <Link href="/dashboard/conditions" className="pl-4 flex items-center">
          <span
            className={`w-8 h-8w-8 h-8 grid place-items-center mr-2 rounded-md ${
              pathname == "/dashboard/conditions"
                ? "bg-blue-600"
                : "bg-transparent"
            }`}
          >
            <FcAbout className="w-full h-auto" />
          </span>
          <span
            className={`hidden lg:inline-block ${
              pathname == "/dashboard/conditions" ? "font-bold" : ""
            }`}
          >
            Conditions
          </span>
        </Link>
      </li>
    </ul>
  );
}
