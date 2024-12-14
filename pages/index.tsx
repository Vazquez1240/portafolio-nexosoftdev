import { NextUIProvider } from "@nextui-org/react";

import ComponenteHome from "@/components/ComponenteHome";
import ComponenteProyectos from "@/components/ComponenteProyectos";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
// import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <NextUIProvider>
      <div className="flex flex-col">
        <Navbar />
        <main className="w-full h-full flex flex-col">
          <ComponenteHome />
          <ComponenteProyectos />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </NextUIProvider>
  );
}
