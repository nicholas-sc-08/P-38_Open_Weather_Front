"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Cloud, Droplet, MapPin, Wind } from "lucide-react";

export default function CardResponse() {

    return (
        <AnimatePresence>
            <motion.div className="flex justify-center items-center w-80 h-80" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
                <Card className="w-full h-full flex flex-col justify-around">
                    <CardHeader>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            <CardTitle className="flex items-center"><MapPin className="mr-2" />Florianópolis</CardTitle>
                        </motion.div>
                        <CardDescription className="flex items-center">overcast clouds</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <motion.div className="flex items-center justify-center h-20" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                            <h2 className="text-lg">18°C</h2>
                            <Cloud className="ml-2" />
                        </motion.div>
                    </CardContent>
                    <CardFooter>
                        <motion.div className="flex justify-evenly items-center w-full h-full">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-col justify-center items-center">
                                <Droplet />
                                <p className="text-muted-foreground">90%</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-col justify-center items-center">
                                <Wind />
                                <p className="text-muted-foreground">3.6km/h</p>
                            </motion.div>
                        </motion.div>
                    </CardFooter>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
};