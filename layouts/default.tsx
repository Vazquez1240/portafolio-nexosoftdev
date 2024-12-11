import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl h-screen px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center">
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
  );
}
