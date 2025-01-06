"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import ComponenteAnimacion from "@/components/Animacion/ComponenteAnimacion";

export default function ComponenteNosotros() {
  const [mounted, setMounted] = useState(false);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

  const colorIndicador = isLight ? "primary" : "default";

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <ComponenteAnimacion className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="px-4 flex justify-center md:px-6 w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Acerca de Nosotros
            </h2>
            <p className="text-foreground-500 text-justify ">
              Nexosoft es una empresa innovadora dedicada a proporcionar
              soluciones tecnológicas de vanguardia. Nuestro equipo de expertos
              está comprometido con la excelencia y la satisfacción del cliente
              en desarrollo web, diseño UX/UI, servicios en la nube. En
              Nexosoft, trabajamos de la mano con nuestros clientes, brindando
              atención personalizada y garantizando que cada proyecto se ajuste
              perfectamente a sus necesidades y expectativas. Nuestro enfoque
              ágil y flexible nos permite adaptarnos rápidamente a los cambios
              del mercado, ofreciendo siempre soluciones innovadoras y a la
              vanguardia.
            </p>
            <Button
              as="a"
              className="mt-6"
              color={colorIndicador}
              href="/nosotros"
            >
              Conoce más sobre nosotros
            </Button>
          </motion.div>
          <motion.div
            className="relative h-[300px] md:h-[400px]"
            variants={fadeInUp}
          >
            <Image
              alt="Nuestro equipo"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </motion.div>
        </div>
      </div>
    </ComponenteAnimacion>
  );
}
