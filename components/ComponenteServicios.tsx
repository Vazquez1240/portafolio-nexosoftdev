import { Card, CardHeader } from "@nextui-org/react";

import { title, card } from "@/components/primitives";

import { Servicios } from "@/utils/servicios";
import { IconosServicios } from "@/utils/icons";

export default function ComponenteServicios() {
  return (
    <section
      className="mb-32 flex flex-col gap-14 justify-center items-center"
      id="servicios"
    >
      <div>
        <h3
          className={title({ fullWidth: true, animation: "fade", size: "sm" })}>
          Nuestros Servicios
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Servicios.map((servicio, index) => {
          const IconComponent =
            IconosServicios[servicio.icon as keyof typeof IconosServicios];

          return (
            <Card key={index} className={card()}>
              <CardHeader className="flex justify-center flex-col gap-5 items-center">
                {IconComponent && <IconComponent size={48} />}
                <h4 className="text-center">{servicio.title}</h4>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
