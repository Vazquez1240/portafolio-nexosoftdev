import { title } from "@/components/primitives";
import { Servicios } from "@/utils/servicios";
import { IconosServicios } from "@/utils/icons";
import ComponenteCardCustom from "@/components/ComponenteCardCustom";

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
              <ComponenteCardCustom
                key={index}
                icon={IconComponent} // Pasa el componente del ícono
                titulo={servicio.title} // Pasa el título
                description={servicio.description} // Pasa la descripción
                index={String(index)} // Pasa el índice como string
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
