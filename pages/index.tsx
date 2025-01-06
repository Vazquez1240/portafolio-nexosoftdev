import DefaultLayout from "@/layouts/default";
import ComponenteHome from "@/components/ComponenteHome";
import ComponenteServicios from "@/components/Servicios/ComponenteServicios";
import ComponenteNosotros from "@/components/Nosotros/ComponenteNosotros";
import ComponenteElegirnos from "@/components/Elegirnos/ComponenteElegirnos";
import ComponenteContacto from "@/components/Contacto/ComponenteContacto";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col">
        <ComponenteHome />
        <ComponenteServicios />
        <ComponenteElegirnos />
        <ComponenteNosotros />
        <ComponenteContacto />
      </div>
    </DefaultLayout>
  );
}
