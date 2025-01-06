"use client";

import { Button } from "@nextui-org/button";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";

import { subtitle, title, button } from "@/components/primitives";

export default function ComponenteHome() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("servicios");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[780px] px-4">
      <div className="text-center justify-center gap-3 md:gap-6 flex flex-col w-[90%]">
        <h1 className={title({ fullWidth: true, animation: "fade", size: "sm" })}>
          ¡Bienvenidos a NexosoftDev!
        </h1>
        <h3 className={subtitle({ animation: "fade" })}>
          En NexosoftDev, creemos en el poder de la creatividad, la innovación y
          el trabajo en equipo. Nos especializamos en crear soluciones web
          personalizadas que se adaptan a tus necesidades y aportan valor a tus proyectos. 🚀✨
        </h3>
      </div>
      <div
        className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-50 ${
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
