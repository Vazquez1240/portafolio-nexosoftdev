import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const registerServiceWorker = async () => {
      if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        try {
          // Desregistrar cualquier Service Worker existente
          const existingRegistration =
            await navigator.serviceWorker.getRegistration();

          if (existingRegistration) {
            await existingRegistration.unregister();
            console.log("Service Worker anterior desregistrado");
          }

          // Registrar el nuevo Service Worker
          const registration = await navigator.serviceWorker.register(
            "/service-worker.js",
            {
              scope: "/",
              type: "classic",
            },
          );

          console.log("Service Worker registrado:", registration);

          // Esperar a que el Service Worker esté activo
          if (registration.installing) {
            console.log("Service Worker instalando");
            registration.installing.addEventListener("statechange", (e) => {
              // @ts-ignore
              if (e.target.state === "activated") {
              }
            });
          }

          // Verificar si ya está activo
          if (registration.active) {
            console.log("Service Worker ya está activo");
          }
        } catch (error) {
          console.error("Error al registrar el Service Worker:", error);
        }
      }
    };

    registerServiceWorker();
  }, []);

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
