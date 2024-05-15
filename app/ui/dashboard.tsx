"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";
import { User } from "@/app/dashboard/parametres/formParam";
import Compteur from "./compteur";
import Link from "next/link";

export function SidebarRight({ users }: { users: User }) {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname == "/dashboard" ? "" : "hidden"
      } p-3 md:w-72 shrink-0 md:sticky md:top-16 h-full`}
    >
      <h2 className="text-xl font-semibold">Top Inscrit récemment</h2>
      <ul className="mt-3 space-y-3">
        {users.map(({ email, name, image, id }) => (
          <li className="bg-slate-800 rounded-md p-2 flex shadow-lg" key={id}>
            <Image
              width={48}
              height={48}
              src={image}
              className="w-12 h-12 rounded-md"
              alt={`top artist ${name}`}
            />
            <div className="ml-3">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-zinc-400">{email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full rounded-md bg-gradient-to-tr from-fuchsia-600 to-violet-600 mt-3 p-3 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-white font-semibold">Commencer à apprendre </h2>
          <p className="text-white/70 text-sm mt-1 ">
            Appuyer sur ce button pour commencer à apprendre à votre goût et à
            votre rithme
          </p>
          <Link href="dashboard/apprendre">
            <button className="bg-white w-full rounded-md h-12 text-gray-900 font-semibold mt-2">
              Commencer
            </button>
          </Link>
        </div>
        <div className="absolute left-0 right-0 top-0 z-0">
          <svg
            className="w-full"
            viewBox="0 0 679 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_2)">
              <path
                d="M102.854 22L159.666 116.276L102.854 90.4544V22Z"
                fill="#8A92B2"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 90.4544L159.666 116.276L102.854 149.866V90.4544Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <path
                d="M46.0315 116.276L102.854 22V90.4544L46.0315 116.276Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 149.866L46.0315 116.276L102.854 90.4544V149.866Z"
                fill="#454A75"
                fillOpacity="0.35"
              />
              <path
                d="M159.666 127.055L102.854 207.12V160.625L159.666 127.055Z"
                fill="#8A92B2"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 160.625V207.12L46 127.055L102.854 160.625Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <circle
                cx="552"
                cy="35"
                r="132"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="10"
              />
              <circle
                cx="640"
                cy="115"
                r="132"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="10"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_2">
                <rect width="679" height="360" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
const backGround = [
  "/nft-dashboard-art-0.jpg",
  "/nft-dashboard-art-1.jpg",
  "/nft-dashboard-art-2.jpg",
  "/nft-dashboard-art-3.jpg",
  "/nft-dashboard-art-4.jpg",
  "/nft-dashboard-art-5.jpg",
  ,
];
let i = 0;
export function Items({ users }: { users: User }) {
  return (
    <ul className="p-1.5 flex flex-wrap">
      {users.map(({ id, name, image, email, createdAt }, index) => {
        if (i > 100) {
          i = index - 100;
        } else if (i > 90) {
          i = index - 90;
        } else if (i > 80) {
          i = index - 80;
        } else if (i > 70) {
          i = index - 70;
        } else if (i > 60) {
          i = index - 60;
        } else if (i > 50) {
          i = index - 50;
        } else if (i > 40) {
          i = index - 40;
        } else if (i > 30) {
          i = index - 30;
        } else if (i > 20) {
          i = index - 20;
        } else if (i > 10) {
          i = index - 10;
        } else if (i > 5) {
          i = index - 6;
        } else {
          i = index;
        }
        return (
          <li className="w-full lg:w-1/2  p-1.5" key={id}>
            <div className="block bg-slate-800 rounded-md w-full overflow-hidden pb-4 shadow-lg">
              <div
                className="w-full h-40 bg-center bg-cover relative"
                style={{ backgroundImage: `url(${backGround[i]})` }}
              >
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md flex items-center bg-opacity-30 backdrop-blur-md">
                  <div className="w-1/2 p-3">
                    <h3 className="font-semibold">Inscrit le :</h3>
                    <div className="">
                      {new Date(createdAt).toLocaleString()?.split(" ")[0]}
                    </div>
                  </div>
                  <div className="w-1/2 p-3">
                    <h3 className="font-semibold">Inscrit il y a :</h3>
                    <div className="flex gap-1">
                      <Compteur dateInscrit={createdAt} />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-lg px-3 mt-2">{name}</h3>
              <div className="flex items-center px-3 mt-2">
                <Image
                  width={40}
                  height={40}
                  src={image}
                  className="w-10 h-10 rounded-full"
                  alt="item-owner"
                />
                <span className=" ml-2 text-zinc-400">{email}</span>
              </div>
              <div className="flex mt-2">
                <div className="p-3 w-1/2">
                  <button className="bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full h-12 rounded-md font-semibold">
                    Information
                  </button>
                </div>
                <div className="p-3 w-1/2">
                  <button className="bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full rounded-md font-semibold h-12 p-px">
                    <div className="bg-slate-800 w-full h-full rounded-md grid place-items-center">
                      Voir Profile
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function ArtworkSelector({ text, index, handleActiveFilter, active }) {
  return (
    <li className="">
      <button
        onClick={() => {
          handleActiveFilter(text, index);
        }}
        className={` ${
          active !== index
            ? "text-zinc-500"
            : "text-fuchsia-600 underline font-bold"
        }`}
      >
        {text}
      </button>
    </li>
  );
}

export function Header() {
  return (
    <div className="flex flex-wrap p-3 items-center sticky top-0 bg-slate-900 h-fit  md:h-16 z-30">
      <div className="flex items-center grow md:grow-0 w-fit md:w-48">
        <Image
          width={50}
          height={50}
          className="rounded-full"
          alt="logo du site"
          src="/mycodebusness logo.svg"
        />

        <div className="ml-2 font-bold text-xl">MyCodeBs</div>
      </div>

      <div className="flex items-center order-2 md:order-3 pl-0 md:pl-3">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="absolute right-0 top-0 w-3 h-3 bg-zinc-900 rounded-full p-0.5">
            <div className="bg-red-500 w-full h-full  rounded-full" />
          </div>
        </div>
        <Image
          width={40}
          height={40}
          src="/nft-dashboard-pro-1.jpg"
          alt="user"
          className="w-10 h-10 rounded-full ml-4"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 ml-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="flex  mt-4 md:mt-0 order-3 md:order-2 w-full grow md:w-fit ">
        <button className="grid w-10 h-10 rounded-md bg-transparent border-2 border-slate-800  place-items-center mr-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <form className="relative grow md:max-w-lg">
          <input
            type="text"
            className="bg-transparent pl-3 pr-10 h-10 rounded-md w-full border-2 border-slate-800"
            placeholder="search for collection"
          />
          <span className="absolute right-0 top-0 bottom-0 w-10 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </form>
      </div>
    </div>
  );
}

export function SidebarItem({ text, index }) {
  return (
    <li className="relative">
      {index === 1 ? (
        <div className="absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full" />
      ) : null}
      <a
        href="#"
        className={`pl-4 flex items-center capitalize   ${
          index === 1 ? "text-white" : "text-zinc-500"
        }`}
      >
        <span
          className={`bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${
            index === 1 ? "bg-fuchsia-600" : "bg-zinc-800"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {Icons[text]()}
          </svg>
        </span>
        {text}
      </a>
    </li>
  );
}

export function SidebarLeft() {
  return (
    <div className="hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
      <ul className="space-y-8">
        {[
          "market",
          "dashboard",
          "favourites",
          "trending",
          "collection",
          "wallet",
          "settings",
        ].map((key, index) => (
          <SidebarItem key={key} text={key} index={index} />
        ))}
      </ul>
      <div className="pb-5  px-4">
        <hr className="mb-5 text-zinc-700" />
        <a href="#" className="py-2 flex items-center  text-zinc-500">
          <span className="bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {Icons.logout()}
            </svg>
          </span>
          Logout
        </a>
      </div>
    </div>
  );
}
