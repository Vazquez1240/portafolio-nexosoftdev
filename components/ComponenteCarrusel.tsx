import { useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { CarruselTypeProps } from "@/interfaces/carruselProps";

interface Props {
  items: CarruselTypeProps[];
}

export function ComponenteCarrusel({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const siguienteSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  const anteriorSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };
  const currentItem = items[currentIndex];

  return (
    <div className="relative w-[85%] mx-auto mb-32">
      <Card className="w-full bg-transparent">
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <Image
                alt={currentItem.title}
                className="object-cover rounded-lg"
                height={300}
                src={currentItem.image}
                width={400}
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <div className="flex items-center mb-4">
                <currentItem.icon className="w-8 h-8 mr-2 text-primary" />
                <h3 className="text-2xl font-bold">{currentItem.title}</h3>
              </div>
              <p className="text-foreground-500">{currentItem.description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <Button isIconOnly className=" bg-transparent" onClick={anteriorSlide}>
          <LuChevronLeft className="w-6 h-6" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 bg-transparent transform -translate-y-1/2">
        <Button isIconOnly className="bg-transparentw" onClick={siguienteSlide}>
          <LuChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
