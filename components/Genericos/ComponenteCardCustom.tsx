import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { ElementType } from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface Props {
  icon: ElementType;
  titulo: string;
  description: string;
  index: string;
}

export default function ComponenteCardCustom({
  icon: Icon,
  titulo,
  description,
  index,
}: Props) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

  return (
    <Card
      key={index}
      className="group relative overflow-hidden border-none transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="flex justify-center flex-col items-center gap-5 p-6">
        <div className="p-2 rounded-lg">
          <Icon
            className={`h-8 w-8 ${isLight ? "text-primary" : "text-gray-300"}`}
          />
        </div>
        <h4 className="font-semibold text-lg text-center transition-colors duration-300">
          {titulo}
        </h4>
      </CardHeader>
      <Divider />
      <CardBody className="p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardBody>
    </Card>
  );
}
