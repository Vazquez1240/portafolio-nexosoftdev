"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import {
  LuSend,
  LuUser,
  LuMail,
  LuMessageSquare,
  LuCircleCheck,
  LuPhone,
} from "react-icons/lu";
import axios from "axios";
import { useTheme } from "next-themes";
import { Alert } from "@heroui/alert";

import useConexionInternet from "@/components/Conexion/ConexionInternet";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ComponenteFormulario() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [componteOnline, setComponenteOnline] = useState(false);
  const isOnline = useConexionInternet();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");
  const temaIconos = isLight ? ["text-primary"] : ["text-gray-300"];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.phone.trim()) newErrors.phone = "El telefono es requerido";
    if (!formData.email.trim()) newErrors.email = "El correo es requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Correo no es válido";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Número de telefono no valido";
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isOnline) {
      setComponenteOnline(true);
      setTimeout(() => {
        setComponenteOnline(false);
      }, 1500);

      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (!validateForm()) {
      setIsSubmitting(false);

      return;
    }
    // @ts-ignore
    const response = await axios.post(
      "https://nexosoftdev.com/api/sendEmail/",
      formData,
      {
        headers: {
          "content-type": "application/json",
        },
      },
    );

    if (response.status === 200) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }
  };

  if (!mounted) {
    return (
      <Card className="bg-background/60 backdrop-blur-lg w-full">
        <CardBody className="px-4 py-6 md:px-6">
          <div className="animate-pulse space-y-6">
            <div className="h-12 bg-default-100/50 rounded-lg" />
            <div className="h-12 bg-default-100/50 rounded-lg" />
            <div className="h-12 bg-default-100/50 rounded-lg" />
            <div className="h-32 bg-default-100/50 rounded-lg" />
            <div className="h-12 bg-default-100/50 rounded-lg" />
          </div>
        </CardBody>
      </Card>
    );
  }

  if (isSubmitted) {
    return (
      <Card className="bg-background/60 backdrop-blur-lg">
        <CardBody className="text-center py-10">
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <LuCircleCheck className="w-16 h-16 text-success mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
          <p className="text-foreground-600">
            Gracias por contactarnos. Te responderemos pronto.
          </p>
          <Button
            className="mt-4"
            color="primary"
            variant="shadow"
            onPress={() => setIsSubmitted(false)}
          >
            Enviar otro mensaje
          </Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="bg-background/60 backdrop-blur-lg w-full">
      <CardBody className="px-4 py-6 md:px-6">
        <AnimatePresence>
          {componteOnline && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Alert
                variant="flat"
                color="warning"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-medium font-medium">Upsss... Ha ocurrido un error</span>
                  <span className="text-small font-normal">
                      Esta acción esta limitada sin conexion, intenta cuando vuelvas a tener internet!
                    </span>
                </div>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.form
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Input
              fullWidth
              required
              classNames={{
                input: "bg-transparent",
                inputWrapper: "bg-default-100/50",
              }}
              errorMessage={errors.name}
              isInvalid={!!errors.name}
              label="Nombre"
              name="name"
              placeholder="Tu nombre"
              startContent={
                <LuUser
                  className={`pointer-events-none flex-shrink-0 ${temaIconos[0]}`}
                />
              }
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Input
              fullWidth
              required
              classNames={{
                input: "bg-transparent",
                inputWrapper: "bg-default-100/50",
              }}
              errorMessage={errors.phone}
              isInvalid={!!errors.phone}
              label="Telefono"
              name="phone"
              placeholder="+52 123 456 7890"
              startContent={
                <LuPhone
                  className={`pointer-events-none flex-shrink-0 ${temaIconos[0]}`}
                />
              }
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Input
              fullWidth
              required
              classNames={{
                input: "bg-transparent",
                inputWrapper: "bg-default-100/50",
              }}
              errorMessage={errors.email}
              isInvalid={!!errors.email}
              label="Email"
              name="email"
              placeholder="tu@email.com"
              startContent={
                <LuMail
                  className={`pointer-events-none flex-shrink-0 ${temaIconos[0]}`}
                />
              }
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Textarea
              fullWidth
              required
              classNames={{
                input: "bg-transparent",
                inputWrapper: "bg-default-100/50",
              }}
              errorMessage={errors.message}
              isInvalid={!!errors.message}
              label="Mensaje"
              minRows={4}
              name="message"
              placeholder="Tu mensaje aquí..."
              startContent={
                <LuMessageSquare
                  className={`pointer-events-none flex-shrink-0 ${temaIconos[0]}`}
                />
              }
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              className="w-full"
              color={theme === "light" ? "primary" : "default"}
              isLoading={isSubmitting}
              size="lg"
              startContent={!isSubmitting && <LuSend className="w-4 h-4" />}
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </motion.div>
        </motion.form>
      </CardBody>
    </Card>
  );
}
