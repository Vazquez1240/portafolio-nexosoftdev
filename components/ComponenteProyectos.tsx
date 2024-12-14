"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/react";
import React from "react";

const projects = [
  {
    title: "ID Digital",
    description:
      "ID Digital es una herramienta para auntenticarte como ciudadano ante el municipio de Monterrey, Nuevo León.",
    image: "/placeholder.svg?height=200&width=300",
    languages: ["Vue3", "Quasar", "Django", "Keycloak", "GCP"],
    longDescription:
      "Una descripción más detallada del Proyecto 1, incluyendo los desafíos superados y los resultados obtenidos.",
  },
  {
    title: "Proyecto 2",
    description:
      "Detalles sobre el proyecto 2 y cómo contribuyó al éxito del cliente.",
    image: "/placeholder.svg?height=200&width=300",
    languages: ["Vue.js", "Express", "PostgreSQL"],
    longDescription:
      "Explicación extensa del Proyecto 2, detallando la arquitectura utilizada y las mejoras en el rendimiento logradas.",
  },
  {
    title: "Proyecto 3",
    description:
      "Explicación del proyecto 3 y las tecnologías utilizadas en su desarrollo.",
    image: "/placeholder.svg?height=200&width=300",
    languages: ["Angular", "Django", "MySQL"],
    longDescription:
      "Descripción completa del Proyecto 3, incluyendo las características innovadoras implementadas y los beneficios para el usuario final.",
  },
];

export default function ComponenteProyectos() {
  return (
    <section className="" id="proyectos">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{project.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{project.description}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <div className="flex flex-row gap-2">
                  {project.languages.map((language, index) => (
                    <Chip key={index}>{language}</Chip>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
