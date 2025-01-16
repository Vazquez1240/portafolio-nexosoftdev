import { Link } from "@heroui/link";

export default function Footer() {
  return (
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
  );
}
