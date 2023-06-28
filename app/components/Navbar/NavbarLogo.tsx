import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link className="mx-3" href="./">
      <div className="relative w-36 h-10 my-2 sm:my-0">
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
