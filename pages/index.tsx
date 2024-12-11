import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import {ComputerIcon} from "@/components/icons";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-center justify-center w-full gap-4 flex flex-col">
          <h1 className={title({ fullWidth: true })}>
            Bienvenidos a NexosoftDev
          </h1>
          <h3 className={subtitle({})}>
            En NexosoftDev, creemos en el poder de la creatividad, la innovación y el trabajo en equipo. Nos
            especializamos en crear soluciones web personalizadas que se adaptan a tus necesidades y aportan valor a tus proyectos. <ComputerIcon />
          </h3>
        </div>
      </section>
    </DefaultLayout>
  );
}
