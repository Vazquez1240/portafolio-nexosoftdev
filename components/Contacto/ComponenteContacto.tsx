import { motion } from "framer-motion";
import { LuPhone, LuMail, LuPin } from "react-icons/lu";

import ComponenteAnimacion from "@/components/Animacion/ComponenteAnimacion";
import ComponenteFormulario from "@/components/Contacto/ComponenteFormulario";

export default function ComponenteContacto() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section>
      <ComponenteAnimacion className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex justify-center items-center flex-col w-full">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
            variants={fadeInUp}
          >
            Contáctanos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-[90%] p-4">
            <motion.div variants={fadeInUp}>
              <div className="backdrop-blur-lg">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Información de Contacto
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <LuPhone className="w-6 h-6 mr-2" />
                      <span>+52 (481) 123-2663</span>
                    </li>
                    <li className="flex items-center">
                      <LuMail className="w-6 h-6 mr-2" />
                      <span>contacto.nexosoft@gmail.com</span>
                    </li>
                    <li className="flex items-center">
                      <LuPin className="w-6 h-6 mr-2" />
                      <span>Monterrey, Nuevo León</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full" variants={fadeInUp}>
              {/*<ContactForm /> */}
              <ComponenteFormulario />
            </motion.div>
          </div>
        </div>
      </ComponenteAnimacion>
    </section>
  );
}
