import { useState, useEffect, useCallback } from "react";

export default function useConexionInternet() {
  const [isOnline, setIsOnline] = useState(true);

  const checkConnection = useCallback(() => {
    if (typeof window === "undefined") return;

    const online = navigator.onLine;

    setIsOnline(online);
  }, []);

  useEffect(() => {
    checkConnection();

    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    // Agregar event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("focus", checkConnection);

    // Verificar periódicamente
    const interval = setInterval(checkConnection, 5000);

    // Verificar después de que el componente se monte completamente
    const timeout = setTimeout(checkConnection, 1000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("focus", checkConnection);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [checkConnection]);

  return isOnline;
}
