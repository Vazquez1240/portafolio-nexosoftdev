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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const theme = useTheme();

  const colorIndicador =
    theme.theme === "light"
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

  return (
    <div className="relative w-[85%] mx-auto mb-32">
      <Card className="w-full min-h-[600px] md:min-h-[500px] bg-transparent">
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative w-full h-[280px] md:h-full">
              <div className="absolute inset-0 m-4">
                <AnimatePresence mode="wait">
                  {items.map(
                    (item, index) =>
                      currentIndex === index && (
                        <motion.div
                          key={index}
                          animate={{ opacity: 1 }}
                          className="relative w-full h-full"
                          exit={{ opacity: 0 }}
                          initial={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            fill
                            priority
                            alt={item.title}
                            className="rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src={item.image}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 py-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
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
      <div className="absolute flex justify-center w-full space-x-5 bottom-3">
        {items.map((_, index) => (
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
      <Button
        isIconOnly
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent"
        onPress={anteriorSlide}
      >
        <LuChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        isIconOnly
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent"
        onPress={siguienteSlide}
      >
        <LuChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
}
