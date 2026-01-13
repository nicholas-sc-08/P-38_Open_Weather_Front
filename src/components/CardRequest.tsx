"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { SearchIcon } from "lucide-react";

export default function CardClient() {
    return (
        <AnimatePresence>
            <motion.div className="flex justify-center items-center w-screen h-screen" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <Card className="w-80 h-65">
                    <CardHeader>
                        <CardTitle>Open Weather Application</CardTitle>
                        <CardDescription>Here is where you can consult any climate around the world!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                            <Label className="mb-3">City or State Name</Label>
                            <Input className="w-full" placeholder="Insert the city or state here!" />
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="w-full mt-5 cursor-pointer">Search climate <SearchIcon/></Button>
                            </motion.div>
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}