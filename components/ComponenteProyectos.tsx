"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import React from "react";

const projects = [
  {
    title: "Proyecto 1",
    description:
      "Una breve descripción del proyecto 1 y sus características principales.",
    image: "/placeholder.svg?height=200&width=300",
    languages: ["React", "Node.js", "MongoDB"],
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
                  <p className="text-md">NextUI</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Make beautiful websites regardless of your design experience.</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
