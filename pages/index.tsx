import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-center justify-center w-full gap-4 flex flex-col">
          <h1 className={title({ fullWidth: true, animation: "fade" })}>
            Bienvenidos a NexosoftDev
          </h1>
          <div className='flex w-full flex-row'>
            <h3 className={subtitle({ animation: "fade" })}>
              En NexosoftDev, creemos en el poder de la creatividad, la innovación y el trabajo en equipo. Nos
              especializamos en crear soluciones web personalizadas que se adaptan a tus necesidades y aportan valor a
              tus proyectos. 🚀✨
            </h3>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
