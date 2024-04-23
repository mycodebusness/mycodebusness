"use client";
import React from "react";
import Typewriter from "typewriter-effect";
export function Typewrite() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2000)
          .typeString(
            'Un pro <strong><span style="color: #1E90FF;">du clavier !</span></strong>'
          )
          .pauseFor(100)
          .deleteChars(12)
          .typeString(
            '<strong><span style="color: #32CD32 ;">de la souris !</span></strong>'
          )
          .pauseFor(100)
          .deleteAll()
          .typeString(
            'Un développeur <strong><span style="color: #FFA500;">Web !</span></strong>'
          )
          .pauseFor(100)
          .deleteChars(6)
          .typeString(
            '<strong><span style="color: #7FFF00;">Mobile !</span></strong>'
          )
          .pauseFor(100)
          .deleteChars(8)
          .typeString(
            '<strong><span style="color: #8A2BE2;">Desktop !</span></strong>'
          )
          .pauseFor(100)
          .deleteAll()
          .typeString(
            '<strong><span style="color: #00CED1;">Un web designer !</span></strong>'
          )
          .pauseFor(100)
          .deleteAll()
          .typeString(
            '<strong><span style="color: #FF1493 ;">Un réseautiste !</span></strong>'
          )
          .pauseFor(100)
          .deleteAll()
          .typeString(
            '<strong><span style="color: #006400;">Un admin de BD !</span></strong>'
          )
          .pauseFor(100)
          .deleteAll()
          .typeString(
            '<strong><span style="color: #FF8C00;">Et enfin un informaticien accompli !</span> Et <span style="color: #FF8C00;">le travail en équipe !</span> </strong>'
          )
          .pauseFor(1000)
          .start();
      }}
    />
  );
}
