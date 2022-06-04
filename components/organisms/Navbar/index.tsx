import Link from "next/link";
import { useEffect } from "react";
import Menu from "./Menu";
import ToggleMenu from "./ToggleMenu";

export default function Navbar() {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector("header");

      if (window.pageYOffset) {
        header?.classList.add("navbar-fixed");
      } else {
        header?.classList.remove("navbar-fixed");
      }
    };
  }, []);

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition-all duration-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link href="#home">
              <a className="font-bold text-lg text-primary block py-6">
                yubliwarokka
              </a>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <ToggleMenu />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
