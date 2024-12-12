"use client";

import { Button } from "@nextui-org/button";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";

import { subtitle, title } from "@/components/primitives";

export default function ComponenteHome() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("proyectos");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full">
      <div className="text-center justify-center w-full gap-4 flex flex-col">
        <h1 className={title({ fullWidth: true, animation: "fade" })}>
          ¡Bienvenidos a NexosoftDev!
        </h1>
        <h3 className={subtitle({ animation: "fade" })}>
          En NexosoftDev, creemos en el poder de la creatividad, la innovación
          innovación y el trabajo en equipo. Nos especializamos en crear
          soluciones web personalizadas que se adaptan a tus necesidades y
          aportan aportan valor a tus proyectos. 🚀✨
        </h3>
      </div>
      <div
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button
          isIconOnly
          aria-label="Desplazarse hacia abajo"
          className="animate-bounce shadow-lg hover:shadow-xl transition-shadow bg-transparent"
          size="lg"
          onClick={scrollToProjects}
        >
          <FaAngleDown />
        </Button>
      </div>
    </section>
  );
}
