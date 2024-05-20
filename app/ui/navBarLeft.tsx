"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarLeft() {
  const linksNav = [
    {
      // className="w-full h-auto"
      name: "Dashboard",
      icon: (
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
          className="w-full h-auto"
        >
          <polygon fill="#E8EAF6" points="42,39 6,39 6,23 24,6 42,23" />
          <g fill="#C5CAE9">
            <polygon points="39,21 34,16 34,9 39,9" />
            <rect x="6" y="39" width="36" height="5" />
          </g>
          <polygon
            fill="#B71C1C"
            points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"
          />
          <rect x="18" y="28" fill="#D84315" width="12" height="16" />
          <rect x="21" y="17" fill="#01579B" width="6" height="6" />
          <path
            fill="#FF8A65"
            d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
          />
        </svg>
      ),
      activelink: "/dashboard",
    },
    {
      name: "Apprendre",
      icon: (
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
          className="w-full h-auto"
        >
          <circle fill="#FFF59D" cx="24" cy="22" r="20" />
          <path
            fill="#FBC02D"
            d="M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"
          />
          <path
            fill="#FFF59D"
            d="M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"
          />
          <circle fill="#5C6BC0" cx="24" cy="44" r="3" />
          <path
            fill="#9FA8DA"
            d="M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"
          />
          <g fill="#5C6BC0">
            <path d="M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z" />
            <polygon points="18,38.7 18,40.7 30,39 30,37" />
          </g>
        </svg>
      ),
      activelink: "/dashboard/apprendre",
    },
    {
      name: "Challenge",
      icon: (
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
          className="w-full h-auto"
        >
          <g fill="#00BCD4">
            <rect x="37" y="18" width="6" height="24" />
            <rect x="29" y="26" width="6" height="16" />
            <rect x="21" y="22" width="6" height="20" />
            <rect x="13" y="32" width="6" height="10" />
            <rect x="5" y="28" width="6" height="14" />
          </g>
          <g fill="#3F51B5">
            <circle cx="8" cy="16" r="3" />
            <circle cx="16" cy="18" r="3" />
            <circle cx="24" cy="11" r="3" />
            <circle cx="32" cy="13" r="3" />
            <circle cx="40" cy="9" r="3" />
            <polygon points="39.1,7.2 31.8,10.9 23.5,8.8 15.5,15.8 8.5,14.1 7.5,17.9 16.5,20.2 24.5,13.2 32.2,15.1 40.9,10.8" />
          </g>
        </svg>
      ),
      activelink: "/dashboard/challenge",
    },
    {
      name: "Plan Etude",
      icon: (
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
          className="w-full h-auto"
        >
          <path fill="#BF360C" d="M41.2,5h-7.3L32,43h11L41.2,5z" />
          <path fill="#E64A19" d="M33,23h-4v-6l-12,6v-6L5,23v20h28V23z" />
          <rect x="9" y="27" fill="#FFC107" width="4" height="4" />
          <rect x="17" y="27" fill="#FFC107" width="4" height="4" />
          <rect x="25" y="27" fill="#FFC107" width="4" height="4" />
          <rect x="9" y="35" fill="#FFC107" width="4" height="4" />
          <rect x="17" y="35" fill="#FFC107" width="4" height="4" />
          <rect x="25" y="35" fill="#FFC107" width="4" height="4" />
        </svg>
      ),
      activelink: "/dashboard/plan",
    },
    {
      name: "Projets & Outils",
      icon: (
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
          className="w-full h-auto"
        >
          <circle fill="#3F51B5" cx="18" cy="18" r="15" />
          <path
            fill="#FFF59D"
            d="M20.3,16v1.7h-3.8v1.4h3.8v1.7h-3.8c0,0.6,0.1,1.2,0.3,1.6c0.2,0.4,0.4,0.8,0.7,1c0.3,0.3,0.7,0.4,1.1,0.6 c0.4,0.1,0.9,0.2,1.4,0.2c0.4,0,0.7,0,1.1-0.1c0.4-0.1,0.7-0.1,1-0.3l0.4,2.7c-0.4,0.1-0.9,0.2-1.4,0.2c-0.5,0.1-1,0.1-1.5,0.1 c-0.9,0-1.8-0.1-2.6-0.4c-0.8-0.2-1.5-0.6-2-1.1c-0.6-0.5-1-1.1-1.4-1.9c-0.3-0.7-0.5-1.6-0.5-2.6h-1.9v-1.7h1.9v-1.4h-1.9V16h1.9 c0.1-1,0.3-1.8,0.6-2.6c0.4-0.7,0.8-1.4,1.4-1.9c0.6-0.5,1.3-0.9,2.1-1.1c0.8-0.3,1.7-0.4,2.6-0.4c0.4,0,0.9,0,1.3,0.1 c0.4,0.1,0.9,0.1,1.3,0.3l-0.4,2.7c-0.3-0.1-0.6-0.2-1-0.3c-0.4-0.1-0.7-0.1-1.1-0.1c-0.5,0-1,0.1-1.4,0.2c-0.4,0.1-0.8,0.3-1,0.6 c-0.3,0.3-0.5,0.6-0.7,1s-0.3,0.9-0.3,1.5H20.3z"
          />
          <circle fill="#4CAF50" cx="30" cy="30" r="15" />
          <path
            fill="#fff"
            d="M28.4,27c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.1,0.5c0.7,0.3,1.4,0.6,2,0.9 c0.6,0.3,1.1,0.7,1.5,1.1c0.4,0.4,0.8,0.9,1,1.4c0.2,0.5,0.4,1.2,0.4,1.9c0,0.7-0.1,1.3-0.3,1.8c-0.2,0.5-0.5,1-0.9,1.4 s-0.9,0.7-1.4,0.9c-0.6,0.2-1.2,0.4-1.8,0.5v2.2h-1.8v-2.2c-0.6-0.1-1.2-0.2-1.8-0.4s-1.1-0.5-1.5-1c-0.5-0.4-0.8-1-1.1-1.6 c-0.3-0.6-0.4-1.4-0.4-2.3h3.3c0,0.5,0.1,1,0.2,1.3c0.1,0.4,0.3,0.6,0.6,0.9c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.1,0.9,0.1 c0.4,0,0.7,0,0.9-0.1c0.3-0.1,0.5-0.2,0.7-0.4c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.5,0.1-0.8c0-0.3,0-0.6-0.1-0.8 c-0.1-0.2-0.2-0.5-0.4-0.7s-0.4-0.4-0.7-0.5c-0.3-0.2-0.7-0.3-1.1-0.5c-0.7-0.3-1.4-0.6-2-0.9c-0.6-0.3-1.1-0.7-1.5-1.1 c-0.4-0.4-0.8-0.9-1-1.4c-0.2-0.5-0.4-1.2-0.4-1.9c0-0.6,0.1-1.2,0.3-1.7c0.2-0.5,0.5-1,0.9-1.4c0.4-0.4,0.9-0.7,1.4-1 c0.5-0.2,1.2-0.4,1.8-0.5v-2.4h1.8v2.4c0.6,0.1,1.2,0.3,1.8,0.6c0.5,0.3,1,0.6,1.3,1.1c0.4,0.4,0.7,1,0.9,1.6c0.2,0.6,0.3,1.3,0.3,2 h-3.3c0-0.9-0.2-1.6-0.6-2c-0.4-0.4-0.9-0.7-1.5-0.7c-0.3,0-0.6,0.1-0.9,0.2c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.2-0.3,0.4-0.3,0.6 c-0.1,0.2-0.1,0.5-0.1,0.8C28.3,26.5,28.4,26.8,28.4,27z"
          />
        </svg>
      ),
      activelink: "/dashboard/outils",
    },
    {
      name: "Paramètres",
      icon: (
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
          className="w-full h-auto"
        >
          <path
            fill="#EF6C00"
            d="M37.4,24.6l-11.6-2.2l-3.9-11.2l-3.8,1.3L22,23.6l-7.8,9l3,2.6l7.8-9l11.6,2.2L37.4,24.6z"
          />
          <g fill="#FF9800">
            <path d="M24,19c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5s5-2.2,5-5C29,21.2,26.8,19,24,19z M24,26c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C26,25.1,25.1,26,24,26z" />
            <path d="M40.7,27c0.2-1,0.3-2,0.3-3c0-1-0.1-2-0.3-3l3.3-2.4c0.4-0.3,0.6-0.9,0.3-1.4L40,9.8 c-0.3-0.5-0.8-0.7-1.3-0.4L35,11c-1.5-1.3-3.3-2.3-5.2-3l-0.4-4.1c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9L18.2,8 c-1.9,0.7-3.7,1.7-5.2,3L9.3,9.3C8.8,9.1,8.2,9.3,8,9.8l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4L7.3,21C7.1,22,7,23,7,24 c0,1,0.1,2,0.3,3L4,29.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,38.2c0.3,0.5,0.8,0.7,1.3,0.4L13,37c1.5,1.3,3.3,2.3,5.2,3l0.4,4.1 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.4-4.1c1.9-0.7,3.7-1.7,5.2-3l3.7,1.7c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L40.7,27z M24,35c-6.1,0-11-4.9-11-11c0-6.1,4.9-11,11-11s11,4.9,11,11C35,30.1,30.1,35,24,35z" />
          </g>
        </svg>
      ),
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
            <svg
              className="w-full h-auto"
              version="1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
            >
              <path
                fill="#2196F3"
                d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"
              />
              <g fill="#fff">
                <rect x="22" y="20" width="4" height="11" />
                <circle cx="24" cy="15" r="2" />
              </g>
            </svg>
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
