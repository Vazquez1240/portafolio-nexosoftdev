"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { valores } from "@/utils/valores";

import ComponenteCardCustom from "@/components/ComponenteCardCustom";

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

  // @ts-ignore
  return (
    <div className="w-[93%] mb-8 px-4 md:px-6">
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
        variants={fadeInUp}
      >
        Nuestros Valores
      </motion.h2>
      <motion.div
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        initial="initial"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {valores.map((value, index) => (
          <motion.div key={value.title} variants={fadeInUp}>
            <ComponenteCardCustom
              icon={value.icon}
              description={value.description}
              titulo={value.title}
              index={String(index)} />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
