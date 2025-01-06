"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { CarruselTypeProps } from "@/interfaces/carruselProps";

interface Props {
  items: CarruselTypeProps[];
  auto_display?: boolean;
  time?: number;
}

export function ComponenteCarrusel({
  items,
  auto_display = false,
  time = 3000,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");
  const colorIndicador = isLight
    ? ["bg-blue-500", "bg-blue-400"]
    : ["bg-gray-200", "bg-gray-400"];

  const siguienteSlide = () => {
    resetInterval();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const anteriorSlide = () => {
    resetInterval();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (auto_display) {
      intervalRef.current = setInterval(() => {
        siguienteSlide();
      }, time);
    }
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [auto_display, time, items.length]);

  const currentItem = items[currentIndex];

  if (!mounted) {
    return (
      <div className="relative w-[90%] mx-auto mb-32">
        <div className="animate-pulse">
          <div className="h-64 bg-default-100/50 rounded-lg"/>
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-default-200/50"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[90%] mx-auto mb-32">
      <Card className="w-full h-full min-h-[600px] md:min-h-[240px] bg-transparent">
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center overflow-hidden">
              <div className="relative h-52 sm:h-72 lg:h-72 xl:h-72 md:h-72 w-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  {items.map(
                    (item, index) =>
                      currentIndex === index && (
                        <motion.div
                          key={index}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute inset-0"
                          exit={{ opacity: 0, x: -50 }}
                          initial={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            alt={item.title}
                            className="rounded-lg"
                            height={400}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src={item.image}
                            style={{
                              objectFit: "cover",
                            }}
                            width={400}
                          />
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <currentItem.icon className="w-8 h-8 mr-2" />
                    <h3 className="text-2xl font-bold">{currentItem.title}</h3>
                  </div>
                  <p className="text-foreground-500">
                    {currentItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="absolute flex sm:flex lg:flex xl:flex z-30 -translate-x-1/2 bottom-3 left-1/2 space-x-5 rtl:space-x-reverse">
        {items.map((item, index) => (
          <button
            key={index}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? colorIndicador[0] : colorIndicador[1]
            }`}
            type="button"
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <Button isIconOnly className="bg-transparent" onPress={anteriorSlide}>
          <LuChevronLeft className="w-6 h-6" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 bg-transparent transform -translate-y-1/2">
        <Button isIconOnly className="bg-transparent" onPress={siguienteSlide}>
          <LuChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
