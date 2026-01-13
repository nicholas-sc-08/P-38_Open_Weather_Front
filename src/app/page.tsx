"use client";

import { AnimatePresence } from "framer-motion";
import CardRequest from "@/components/CardRequest";

export default function Home() {
  return (
    <AnimatePresence>
      <CardRequest/>
    </AnimatePresence>
  );
}
