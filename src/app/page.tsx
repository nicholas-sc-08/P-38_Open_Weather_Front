"use client";

import { AnimatePresence, motion } from "framer-motion";
import CardRequest from "@/components/CardRequest";
import CardResponse from "@/components/CardResponse";
import { useState } from "react";
import { WeatherData } from "./types/WeatherData";

export default function Home() {

  const [weatherInfo, setWeatherInfo] = useState<WeatherData | null>(null);

  return (
    <AnimatePresence>
      <motion.div className="flex flex-col md:flex-row w-screen min-h-screen justify-evenly items-center gap-8 p-4">
        <CardRequest key={"request-card"} setWeatherInfo={setWeatherInfo}/>
        <CardResponse key={"response-card"} weatherInfo={weatherInfo}/>
      </motion.div>
    </AnimatePresence>
  );
}
