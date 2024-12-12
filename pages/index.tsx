import ComponenteHome from "@/components/ComponenteHome";
import ComponenteProyectos from "@/components/ComponenteProyectos";
import DefaultLayout from "@/layouts/default";
// import { NextUIProvider } from "@nextui-org/react"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <ComponenteHome />
      <ComponenteProyectos />
    </DefaultLayout>
  );
}
