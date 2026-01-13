"use client";

import { AnimatePresence, motion } from "framer-motion";
import CardRequest from "@/components/CardRequest";
import CardResponse from "@/components/CardResponse";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div className="w-screen h-screen flex justify-evenly items-center">
        <CardRequest key={"request-card"} />
        <CardResponse key={"response-card"} />
      </motion.div>
    </AnimatePresence>
  );
}
