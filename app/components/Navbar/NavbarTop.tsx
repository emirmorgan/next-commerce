import Link from "next/link";

export default function NavbarTop() {
  return (
    <div className="flex items-center justify-end mt-1">
      <div className="flex gap-3 text-xs text-gray-500">
        <Link className="hover:text-gray-600" href="./">
          About us
        </Link>
        <Link className="hover:text-gray-700" href="./">
          Help & Support
        </Link>
      </div>
    </div>
  );
}
