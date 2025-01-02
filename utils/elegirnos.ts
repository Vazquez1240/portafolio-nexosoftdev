import { FaCheckCircle, FaClock, FaUserFriends } from "react-icons/fa";
import { LuZap } from "react-icons/lu";

import { CarruselTypeProps } from "@/interfaces/carruselProps";

export const ElegirnosData: CarruselTypeProps[] = [
  {
    icon: FaCheckCircle,
    title: "Experiencia Comprobada",
    description:
      "Años de experiencia en el desarrollo de soluciones tecnológicas innovadoras.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    icon: FaClock,
    title: "Entrega Puntual",
    description:
      "Nos comprometemos a entregar proyectos de alta calidad en el tiempo acordado.",
    image:
      "https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg",
  },
  {
    icon: FaUserFriends,
    title: "Enfoque Personalizado",
    description:
      "Trabajamos estrechamente con cada cliente para entender y satisfacer sus necesidades únicas.",
    image: "https://images.pexels.com/photos/5717266/pexels-photo-5717266.jpeg",
  },
  {
    icon: LuZap,
    title: "Tecnología de Vanguardia",
    description:
      "Utilizamos las últimas tecnologías para garantizar soluciones modernas y eficientes.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
];
