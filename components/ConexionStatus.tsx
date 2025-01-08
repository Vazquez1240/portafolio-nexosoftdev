import { useEffect, useState } from "react";

interface Props {
  isOnline: boolean;
}

export default function ConexionStatus({ isOnline }: Props) {
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);
  const [showOnlineAlert, setShowOnlineAlert] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      console.log('🔴 Mostrando alerta de desconexión');
      setIsExiting(false);
      setShowOfflineAlert(true);
      setShowOnlineAlert(false);
    } else if (showOfflineAlert) {
      console.log('🟢 Mostrando alerta de reconexión');
      setIsExiting(true);
      
      // Esperar a que termine la animación de salida
      setTimeout(() => {
        setShowOfflineAlert(false);
        setIsExiting(false);
        setShowOnlineAlert(true);
        
        // Ocultar el mensaje de reconexión después de 3 segundos
        const timer = setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setShowOnlineAlert(false);
            setIsExiting(false);
          }, 300); // Duración de la animación
        }, 3000);

        return () => clearTimeout(timer);
      }, 300); // Duración de la animación
    }
  }, [isOnline]);

  return (
    <>
      {/* Alerta de desconexión */}
      {showOfflineAlert && (
        <div className="fixed top-0 left-0 right-0 flex justify-center z-[9999] p-4 pointer-events-none">
          <div className={`bg-content1 border border-default-200 rounded-lg p-4 max-w-md w-full shadow-lg
            ${isExiting ? 'animate-slide-out' : 'animate-slide-in'}`}>
            <div className="flex items-center gap-2 mb-3">
              <span role="img" aria-label="warning" className="text-2xl">⚠️</span>
              <h3 className="text-foreground font-bold">
                Sin conexión a Internet
              </h3>
            </div>
            <div>
              <p className="mb-2 text-foreground">
                Se ha perdido la conexión a Internet.
              </p>
              <p className="text-sm text-default-500">
                Puedes seguir navegando por las páginas ya cargadas, pero algunas funciones
                no estarán disponibles hasta que se restablezca la conexión.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <div className="animate-pulse w-2 h-2 rounded-full bg-default-400" />
            </div>
          </div>
        </div>
      )}

      {/* Alerta de reconexión */}
      {showOnlineAlert && (
        <div className="fixed top-0 left-0 right-0 flex justify-center z-[9999] p-4 pointer-events-none">
          <div className={`bg-content1 border border-success-200 rounded-lg p-4 max-w-md w-full shadow-lg
            ${isExiting ? 'animate-fade-out' : 'animate-fade-in'}`}>
            <div className="flex items-center gap-2">
              <span role="img" aria-label="success" className="text-2xl">✅</span>
              <div>
                <h3 className="text-foreground font-bold">
                  Conexión restablecida
                </h3>
                <p className="text-sm text-default-500">
                  Se ha recuperado la conexión a Internet
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
