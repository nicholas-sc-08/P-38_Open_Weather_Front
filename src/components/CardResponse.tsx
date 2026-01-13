"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Cloud, Droplet, Map, MapPin, Wind } from "lucide-react";
import { CardResponseProps, WeatherData } from "@/app/types/WeatherData";

export default function CardResponse({ weatherInfo }: CardResponseProps) {

    return (
        <AnimatePresence>
            <motion.div className="flex justify-center items-center w-80 h-80" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
                {weatherInfo != null &&
                    <Card className="w-full h-full flex flex-col justify-around">
                        <CardHeader>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                <CardTitle className="flex items-center"><MapPin className="mr-2" />{weatherInfo.name}</CardTitle>
                            </motion.div>
                            <CardDescription className="flex items-center">{weatherInfo.description}</CardDescription>
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
                }

                {weatherInfo == null &&
                    <Card className="w-full h-full flex flex-col justify-around">
                        <CardContent>
                            <CardTitle className="flex justify-center items-center text-muted-foreground"><Map size={40}/></CardTitle>
                            <motion.div className="flex items-center justify-center h-20" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                                <p className="text-muted-foreground text-center">Search a valid City or State to know the climate informations!</p>
                            </motion.div>
                        </CardContent>
                    </Card>
                }
            </motion.div>
        </AnimatePresence>
    )
};