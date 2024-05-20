import Image from "next/image";
import Link from "next/link";
import "./css/logo.css"; // import { BtnSignIn } from "./components/ui/btnSignIn";
import LoginButton from "./ui/LoginButton";
import { Meteors } from "./ui/meteors";
import { Typewrite } from "./ui/typewrite";
import { Vortex } from "./ui/vortex";
import { serverSesion } from "./lib/serverSesion";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await serverSesion();
  if (!session) {
    return redirect("/dashboard");
  }
  return (
    <>
      <div className="w-full h-screen overflow-hidden hidden lg:block">
        {/* <Image src="/Figma-logo.svg" width={100} height={100}></Image> */}
        <ComponentDesktop />
      </div>
      <div className="w-full h-screen overflow-hidden lg:hidden">
        <ComponentMobile />
      </div>
    </>
  );
}
function ComponentDesktop() {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      // particleCount={500}
      // baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
    >
      <h1 className=" gap-4 text-white text-4xl sm:text-5xl  md:text-6xl font-bold text-center mb-8">
        Bienvenue sur{" "}
        <span className="inline-flex">
          <span className="font-black text-yellow-500">My</span>
          <span className="font-black text-red-700">Code</span>
          <span className="font-black text-blue-700">Busness</span>
        </span>
      </h1>
      <Image
        width={100}
        height={100}
        className="logo"
        alt="logo du site"
        src="/mycodebusness logo.svg"
      />
      <h2 className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Une plateforme d&apos;apprentissage, et juste après notre formation,
        vous deviendrez :
      </h2>
      <div className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        <Typewrite />
      </div>
      <div className="flex sm:flex-row items-center gap-4 mt-6">
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-3 px-8 py-2 bg-blue-700/10 hover:bg-blue-700/20 transition duration-200 rounded-lg text-white"
        >
          Dashboard
        </Link>

        <LoginButton />
      </div>
    </Vortex>
  );
}
function ComponentMobile() {
  return (
    <div className="flex items-center relative flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
      <h1 className=" gap-4 text-white text-4xl sm:text-5xl  md:text-6xl font-bold text-center mb-8">
        Bienvenue sur{" "}
        <span className="inline-flex">
          <span className="font-black text-yellow-500">My</span>
          <span className="font-black text-red-700">Code</span>
          <span className="font-black text-blue-700">Busness</span>
        </span>
      </h1>
      <Image
        width={100}
        height={100}
        className="logo"
        alt="logo du site"
        src="/mycodebusness logo.svg"
      />
      <h2 className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Une plateforme d&apos;apprentissage, et juste après notre formation,
        vous deviendrez :
      </h2>
      <div className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        <Typewrite />
      </div>
      <div className="flex sm:flex-row items-center gap-4 mt-6">
        <LoginButton />
      </div>
      <Meteors number={30} />
    </div>
  );
}
