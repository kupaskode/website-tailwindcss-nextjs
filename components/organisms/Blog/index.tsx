import Link from "next/link";

export default function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
              Tulisan Terkini
            </h2>
            <p className="font-medium text-base md:text-lg text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              saepe ut ad. Illo!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg shadow-slate-400/25 transition-all duration-300">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                className="w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary transition-all duration-300 truncate">
                      Tips Belajar Programming
                    </a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  dignissimos molestias, consequuntur sunt cupiditate veritatis
                  eius?
                </p>
                <Link href="#">
                  <a className="font-normal text-sm text-white bg-primary hover:shadow-lg hover:shadow-primary/25 hover:opacity-80 transition-all duration-500 py-3 px-5 rounded-md">
                    Baca Selengkapnya
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg shadow-slate-400/25 transition-all duration-300">
              <img
                src="https://source.unsplash.com/360x200?keyboard+keychron+k2"
                alt="Programming"
                className="w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary transition-all duration-300 truncate">
                      Review Keyboard Keychron K2
                    </a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi velit itaque accusantium.
                </p>
                <Link href="#">
                  <a className="font-normal text-sm text-white bg-primary hover:shadow-lg hover:shadow-primary/25 hover:opacity-80 transition-all duration-500 py-3 px-5 rounded-md">
                    Baca Selengkapnya
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg shadow-slate-400/25 transition-all duration-300">
              <img
                src="https://source.unsplash.com/360x200?marketing"
                alt="Programming"
                className="w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary transition-all duration-300 truncate">
                      Belajar Marketing Pemula
                    </a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus explicabo incidunt quam iste? Officiis.
                </p>
                <Link href="#">
                  <a className="font-normal text-sm text-white bg-primary hover:shadow-lg hover:shadow-primary/25 hover:opacity-80 transition-all duration-500 py-3 px-5 rounded-md">
                    Baca Selengkapnya
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
