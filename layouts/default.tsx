import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import ConexionStatus from "@/components/Conexion/ConexionStatus";
import useConexionInternet from "@/components/Conexion/ConexionInternet";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isOnline = useConexionInternet();

  return (
    <>
      <ConexionStatus isOnline={isOnline} />
      <div className="relative flex flex-col min-h-screen">
        <Head />
        <Navbar />
        <main className="flex-grow w-full pt-16">{children}</main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://github.com/Vazquez1240"
            title="nextui.org homepage"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">NexosoftDev</p>
          </Link>
        </footer>
      </div>
    </>
  );
}
