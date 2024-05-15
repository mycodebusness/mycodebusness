import { cn } from "../utils/cn";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
export function MeteorsDemo({
  icon = "",
  title = "Titre",
  description = "Contenu",
  textButton = "En savoir plus",
  svgicon = null,
}) {
  return (
    <div className=" w-full relative m-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  p-4 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start">
        <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4 border-gray-500 text-4xl animate-heartbeat-effect">
          {svgicon ? svgicon : icon}
        </div>

        <h3 className="font-bold text-xl text-white mb-4 relative ">{title}</h3>

        <p className="font-normal text-base text-slate-300 mb-4 relative">
          {description}
        </p>

        <button className="border px-4 py-2 rounded-lg  border-gray-5s00 text-gray-300 self-center">
          {textButton}
        </button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
