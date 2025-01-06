import DefaultLayout from "@/layouts/default";
import ComponenteTitulo from "@/components/PageHome/ComponenteTitulo";
import ComponenteServicios from "@/components/PageHome/Servicios/ComponenteServicios";
import ComponenteNosotros from "@/components/PageHome/Nosotros/ComponenteNosotros";
import ComponenteElegirnos from "@/components/PageHome/Elegirnos/ComponenteElegirnos";
import ComponenteContacto from "@/components/PageHome/Contacto/ComponenteContacto";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col">
        <ComponenteTitulo />
        <ComponenteServicios />
        <ComponenteElegirnos />
        <ComponenteNosotros />
        <ComponenteContacto />
      </div>
    </DefaultLayout>
  );
}
