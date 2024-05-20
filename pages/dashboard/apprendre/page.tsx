import { Meteors } from "@/app/ui/meteors";
import React from "react";
import { Card } from "./card";
import { Metadata } from "next";

declare type meteor = {
  title: string;
  description: string;
  icon?: string;
  textButton?: string;
  svg?: any;
}[];
export const metadata: Metadata = {
  title: "apprendre",
};
function Page() {
  const learns: meteor = [
    {
      title: "Maîtrisez le Clavier",
      description:
        "Maîtrisez le clavier pour plus d'efficacité et de productivité.",
    },
    {
      title: "Maîtrisez la souris",
      description:
        "Découvrez le contrôle intuitif de la souris pour une navigation fluide.",
    },
    {
      title: "Maîtrisez le CSS",
      description: "Maîtrisez CSS pour des designs web élégants et dynamiques.",
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-bold p-4">Apprendre</h2>
      <div className="p-1.5 gap-4 relative grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 md:mx-3 lg:mx-2">
        {learns.map(({ title, description }) => (
          <Card key={title} description={description} title={title} />
        ))}
      </div>
    </>
  );
}

export default Page;
