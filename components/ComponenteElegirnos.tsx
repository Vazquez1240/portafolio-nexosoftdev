import { title } from "@/components/primitives";
import { ElegirnosData } from "@/utils/elegirnos";
import { ComponenteCarrusel } from "@/components/ComponenteCarrusel";

export default function ComponenteElegirnos() {
  return (
    <section className="flex flex-col gap-14 justify-center items-center w-full">
      <div className="">
        <h3 className={title({ size: "sm" })}>¿Porque elegirnos?</h3>
      </div>
      <div className="flex justify-center w-full">
        <ComponenteCarrusel items={ElegirnosData}/>
      </div>
    </section>
  );
}
