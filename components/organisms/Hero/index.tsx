import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary text-center lg:text-left md:text-xl lg:text-2xl">
              Halo Semua 👋, saya
              <span className="block font-bold text-dark text-3xl lg:text-4xl mt-1">
                Yubli Audy Warokka
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg text-center lg:text-left lg:text-2xl mb-5">
              Front End Developer &
              <span className="text-dark">Content Creator</span>
            </h2>
            <p className="font-light text-slate-400 mb-10 text-center lg:text-left leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
              <span className="font-bold text-dark">possimus!</span>
            </p>
            <div className="flex justify-center lg:flex lg:justify-start">
              <Link href="#">
                <a className="btn-primary">Hubungi Saya</a>
              </Link>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img src="img/me.png" alt="Me" className="max-w-full mx-auto" />
              <span className="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="500"
                  height="500"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#db2777"
                    d="M39.3,-36.4C52.5,-26.2,65.8,-13.1,62.3,-3.4C58.9,6.2,38.7,12.4,25.6,18.1C12.4,23.8,6.2,29,-3,31.9C-12.1,34.9,-24.2,35.6,-39.3,29.9C-54.3,24.2,-72.3,12.1,-74.4,-2.1C-76.5,-16.2,-62.6,-32.5,-47.5,-42.7C-32.5,-53,-16.2,-57.3,-1.6,-55.7C13.1,-54.1,26.2,-46.7,39.3,-36.4Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      );
    </section>
  );
}
