"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
const loadingStates = [
  {
    text: "L'inscription au groupe'",
  },
  {
    text: "Le respect de l'heure",
  },
  {
    text: "le dépot des travaux pratiques",
  },
  {
    text: "Le respect mutuel",
  },
  {
    text: "La recherche personnelle",
  },
  {
    text: "la lecture quotidienne",
  },
  {
    text: "la participation obligatoire aux challenges",
  },
  {
    text: "La cotisation hebdomadaire",
  },
  {
    text: "La ponctualité lors des rares rencontres",
  },
];

export default function Page() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <h2 className="text-2xl font-bold px-3 mt-3">Conditions d'utilisation</h2>
      <div className="w-full h-[60vh] flex items-center justify-center">
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />

        {/* The buttons are for demo only, remove it in your actual code ⬇️ */}

        <button
          onClick={() => setLoading(true)}
          className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
          }}
        >
          Click pour voir les conditions
        </button>

        {loading && (
          <button
            className="fixed top-4 right-4  text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
    </>
  );
}
