import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

import nodemailer from "nodemailer";
import Handlebars from "handlebars";

type ResponseData = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
): Promise<void> {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Bienvenido a NexosoftDev" });
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const {
    name,
    email,
    message,
    phone,
  }: { name: string; email: string; message: string; phone: string } = req.body;

  // Cargar la plantilla desde el archivo
  const pathCorreoMio = path.join(process.cwd(), "templates", "correo_mio.hbs");
  const pathCorreoUsaurio = path.join(
    process.cwd(),
    "templates",
    "correo_usuario.hbs",
  );
  const templateSource = fs.readFileSync(pathCorreoMio, "utf-8");
  const templateSourceUser = fs.readFileSync(pathCorreoUsaurio, "utf-8");

  // Compilar la plantilla con Handlebars
  const template = Handlebars.compile(templateSource);
  const templateUser = Handlebars.compile(templateSourceUser);
  const htmlToSend = template({ name, message, email, phone });
  const htmlToSendUser = templateUser({ name });

  const mailToMe = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    html: htmlToSend,
  };

  const mailToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Gracias por contactarnos",
    html: htmlToSendUser,
  };

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail(mailToMe);
    await transporter.sendMail(mailToUser);

    return res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al enviar correo" });
  }
}
