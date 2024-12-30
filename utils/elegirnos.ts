import { FaCheckCircle, FaClock, FaUserFriends} from "react-icons/fa";
import { LuZap } from "react-icons/lu";
import { CarruselTypeProps } from "@/interfaces/carruselProps";

export const ElegirnosData: CarruselTypeProps[] = [
  {
    icon: FaCheckCircle,
    title: "Experiencia Comprobada",
    description:
      "Años de experiencia en el desarrollo de soluciones tecnológicas innovadoras.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: FaClock,
    title: "Entrega Puntual",
    description:
      "Nos comprometemos a entregar proyectos de alta calidad en el tiempo acordado.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: FaUserFriends,
    title: "Enfoque Personalizado",
    description:
      "Trabajamos estrechamente con cada cliente para entender y satisfacer sus necesidades únicas.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: LuZap,
    title: "Tecnología de Vanguardia",
    description:
      "Utilizamos las últimas tecnologías para garantizar soluciones modernas y eficientes.",
    image: "/placeholder.svg?height=400&width=600",
  },
];
