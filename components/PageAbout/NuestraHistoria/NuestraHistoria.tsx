import { motion } from "framer-motion";
import Image from "next/image";

export default function NuestraHistoria() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className=" w-[93%] px-4 md:px-6 mb-32">
      <motion.div
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        initial="initial"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestra Historia
          </h2>
          <p className="mt-4 text-lg text-foreground-600 text-justify">
            NexosoftDev nació en 2024 con una visión clara: ser un catalizador de innovación tecnológica en múltiples
            direcciones. Somos un grupo de jóvenes apasionados por la tecnología, comprometidos con transformar ideas en
            realidades mediante la programación y ofreciendo soluciones personalizadas que empoderan a personas y
            empresas.
          </p>
          <p className="mt-4 text-lg text-foreground-600 text-justify">
            Nuestro compromiso es crear herramientas tecnológicas que impulsen objetivos, siempre guiados por la
            excelencia, la creatividad y la pasión por mantenernos a la vanguardia de las tendencias tecnológicas.
          </p>
          <p className="mt-4 text-lg text-foreground-600 text-justify">
            En NexosoftDev creemos que cada idea tiene el poder de cambiar el mundo. Por eso, no solo desarrollamos
            soluciones, sino que construimos puentes entre las ideas y su implementación en la vida real, transformando
            sueños en innovaciones que generan impacto.
          </p>
        </motion.div>
        <motion.div
          className="relative h-[300px] md:h-[400px]"
          variants={fadeInUp}
        >
          <Image
            alt="Nuestra historia"
            className="rounded-lg"
            layout="fill"
            objectFit="cover"
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
