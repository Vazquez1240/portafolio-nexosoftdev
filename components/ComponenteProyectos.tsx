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

import { projects } from "@/utils/proyectos";

export default function ComponenteProyectos() {
  return (
    <section className="mb-32" id="proyectos">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="max-w-[400px]">
              <CardHeader className="flex gap-3 w-full max-h-[250px] justify-center">
                <Image
                  alt="nextui logo"
                  className="bg-white"
                  height="100%"
                  radius="sm"
                  src="https://micro.appsmty.gob.mx/img/sig/sig-god/idmty/mty_sig_idmty_logo_comp.png"
                  width="100%"
                />
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
