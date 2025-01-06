import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";

import { title } from "@/components/primitives";
import { Servicios } from "@/utils/servicios";
import { IconosServicios } from "@/utils/icons";

export default function ComponenteServicios() {
  return (
    <section className="py-24 px-2 w-full" id="servicios">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3
            className={title({
              fullWidth: true,
              animation: "fade",
              size: "sm",
            })}
          >
            Nuestros Servicios
          </h3>
          <p className="text-muted-foreground mt-2">
            Soluciones tecnológicas personalizadas para impulsar tu negocio al
            siguiente nivel
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Servicios.map((servicio, index) => {
            const IconComponent =
              IconosServicios[servicio.icon as keyof typeof IconosServicios];

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-none transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="flex justify-center flex-col items-center gap-5 p-6">
                  <div className="p-2 rounded-lg">
                    {IconComponent && <IconComponent className="h-8 w-8" />}
                  </div>
                  <h4 className="font-semibold text-lg text-center transition-colors duration-300">
                    {servicio.title}
                  </h4>
                </CardHeader>
                <Divider />
                <CardBody className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {servicio.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
