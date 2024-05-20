import Image from "next/image";
import { SidebarLeft } from "./navBarLeft";
// import { AvatarUser } from "../lib/mui";
import Link from "next/link";
export function Header({ imageUrl = "", name = "" }) {
  return (
    <div className="sticky top-0 backdrop-blur-sm bg-slate-900/[0.6] h-fit pb-2 z-50">
      <div className="flex flex-wrap p-3 items-center    md:h-16 z-30">
        <Link
          href="/"
          className="flex cursor items-center grow md:grow-0 w-fit md:w-48"
        >
          <Image
            width={50}
            height={50}
            className="rounded-full"
            alt="logo du site"
            src="/mycodebusness logo.svg"
          />

          <div className="ml-2 font-bold text-xl">
            <span className="hidden md:inline">MyCodeBs</span>
            <span className="inline md:hidden">MyCodeBusness</span>
          </div>
        </Link>

        <div className="flex items-center order-2 md:order-3 pl-0 md:pl-3">
          {/* <AvatarUser imageUrl={imageUrl} name={name} /> */}
        </div>

        <div className="mt-4 md:mt-0 order-3 md:order-2 w-full grow md:w-fit max-md:hidden">
          <form className="relative grow md:max-w-lg">
            <input
              type="text"
              className="bg-transparent pl-3 pr-10 h-10 rounded-md w-full border-2 border-slate-800"
              placeholder="Recherchez sur la page..."
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
      <SidebarLeft />
    </div>
  );
}
