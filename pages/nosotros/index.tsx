import DefaultLayout from "@/layouts/default";
import ComponenteTitulo from "@/components/PageAbout/ComponenteTitulo/ComponenteTitulo";
import NuestraHistoria from "@/components/PageAbout/NuestraHistoria/NuestraHistoria";
import ComponenteValores from "@/components/PageAbout/ComponenteValores/ComponenteValores";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="relative flex flex-col items-center justify-center   px-4">
        <ComponenteTitulo />
        <NuestraHistoria />
        <ComponenteValores />
      </section>
    </DefaultLayout>
  );
}
