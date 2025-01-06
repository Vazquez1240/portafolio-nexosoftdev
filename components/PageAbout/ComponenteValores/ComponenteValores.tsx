"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { valores } from "@/utils/valores";

export default function ComponenteValores() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

  return (
    <div className="w-[85%] px-4 md:px-6">
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
        variants={fadeInUp}
      >
        Nuestros Valores
      </motion.h2>
      <motion.div
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="initial"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {valores.map((value, index) => (
          <motion.div key={value.title} variants={fadeInUp}>
            <Card className="h-full">
              <CardBody className="flex flex-col items-center text-center p-6">
                <value.icon className={`w-12 h-12 mb-4 ${isLight ? "text-primary" : "text-gray-300"}`} />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-foreground-600">{value.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
