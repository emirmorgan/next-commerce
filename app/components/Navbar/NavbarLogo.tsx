import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link href="./">
      <div className="relative w-40 h-10">
        <Image
          fill
          src="/assets/logo.png"
          alt="Logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
}
