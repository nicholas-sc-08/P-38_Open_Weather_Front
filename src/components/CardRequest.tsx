"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { SearchIcon } from "lucide-react";

export default function CardClient() {
    return (
        <motion.div className="flex justify-center items-center w-80 h-80" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100, damping: 15 }}>
            <Card className="w-full h-full flex flex-col justify-around">
                <CardHeader>
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <CardTitle>Open Weather Application</CardTitle>
                        <CardDescription>Here is where you can consult any climate around the world!</CardDescription>
                    </motion.div>
                </CardHeader>
                <CardContent>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <Label className="mb-3">City or State Name</Label>
                        <Input className="w-full" placeholder="Insert the city or state here!" />
                        <motion.div className="mt-5"whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button className="w-full cursor-pointer flex gap-2">
                                Search climate <SearchIcon size={18}/>
                            </Button>
                        </motion.div>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}