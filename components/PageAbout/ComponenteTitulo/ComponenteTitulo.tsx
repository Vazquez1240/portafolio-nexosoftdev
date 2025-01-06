import { motion } from "framer-motion";

export default function ComponenteTitulo() {
  return (
    <div className="w-[82%] min-h-[350px] mt-24">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className=" flex flex-col justify-center items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Conoce Más Sobre Nosotros
        </h1>
        <p className="mx-auto md:text-xl">
          En NexosoftDev, combinamos pasión, experiencia y creatividad para
          construir soluciones innovadoras. Descubre nuestra historia, conoce al
          equipo detrás de cada proyecto y explora los valores que nos inspiran
          a seguir avanzando.
        </p>
      </motion.div>
    </div>
  );
}
