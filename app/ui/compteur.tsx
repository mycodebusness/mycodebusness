"use client";
import React, { useState, useEffect } from "react";
const date = new Date();
export default function Compteur({ dateInscrit=date }) {
  const ecouler = new Date(dateInscrit).getTime();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const dateNow = Date?.now();
      const dateDif = (dateNow - ecouler) / 1000;
      const d = parseInt(dateDif / 86400);
      const day_dif = dateDif % 86400;
      const h = parseInt(day_dif / 3600);
      const hour_dif = day_dif % 3600;
      const m = parseInt(hour_dif / 60);
      const s = parseInt(hour_dif % 60);
      setDay(d);
      setHour(h);
      setMin(m);
      setSec(s);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <span>{day?.toString()}j</span>
      <span>{hour?.toString()}h</span>
      <span>{min?.toString()}m</span>
      <span>{sec?.toString()}s</span>
    </>
  );
}
