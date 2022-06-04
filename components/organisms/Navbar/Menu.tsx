import Link from 'next/link';

export default function Menu() {
  return (
    <nav
      id="nav-menu"
      className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none focus:transition-all duration-300"
    >
      <ul className="block lg:flex">
        <li className="group">
          <Link href="#home">
            <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
              Beranda
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#about">
            <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
              Tentang Saya
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#portfolio">
            <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
              Portfolio
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#clients">
            <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
              Klien
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#blog">
            <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
              Blog
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#contact">
            <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
              Kontak
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
