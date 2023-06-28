import NavbarButtons from "./NavbarButtons";
import NavbarCategories from "./NavbarCategories";
import NavbarLogo from "./NavbarLogo";
import NavbarSearch from "./NavbarSearch";
import NavbarTop from "./NavbarTop";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 mb-5">
      <div className="container mx-auto px-1">
        <div className="flex flex-col">
          <NavbarTop />
          <div className="flex flex-col sm:flex-row justify-between items-center mt-3 mb-2">
            <NavbarLogo />
            <NavbarSearch />
            <NavbarButtons />
          </div>
          <NavbarCategories />
        </div>
      </div>
    </header>
  );
}
