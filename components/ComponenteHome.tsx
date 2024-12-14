"use client";

import { Button } from "@nextui-org/button";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";

import { subtitle, title, button } from "@/components/primitives";

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
    <section className="flex flex-col items-center justify-center mb-32 h-[700px]">
      <div className="text-center justify-center gap-3 flex flex-col w-[90%]">
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
          className={button({ animation: "bounce" })}
          lang="Ver proyectos"
          size="lg"
          onClick={scrollToProjects}
        >
          <FaAngleDown />
        </Button>
      </div>
    </section>
  );
}
