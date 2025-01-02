import { NextUIProvider } from "@nextui-org/react";

import ComponenteHome from "@/components/ComponenteHome";
import ComponenteServicios from "@/components/Servicios/ComponenteServicios";
import ComponenteNosotros from "@/components/Nosotros/ComponenteNosotros";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import ComponenteElegirnos from "@/components/Elegirnos/ComponenteElegirnos";

export default function IndexPage() {
  return (
    <NextUIProvider>
      <div className="flex flex-col">
        <Navbar />
        <main className="w-full h-full flex flex-col">
          <ComponenteHome />
          <ComponenteServicios />
          <ComponenteElegirnos />
          <ComponenteNosotros />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </NextUIProvider>
  );
}
