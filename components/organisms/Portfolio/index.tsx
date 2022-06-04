export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
              Project Terbaru
            </h2>
            <p className="font-medium text-base md:text-lg text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, in voluptates magnam hic eligendi culpa natus omnis
              ullam soluta ad!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 px-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src="portfolio/1.png"
                alt="Landing Page"
                className="w-full"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Personal Landing Page
            </h3>
            <p className="font-normal text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              nesciunt perferendis facere.
            </p>
          </div>
          <div className="mb-12 px-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="portfolio/2.png" alt="E-Commerce" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              E-Commerce
            </h3>
            <p className="font-normal text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              nesciunt perferendis facere.
            </p>
          </div>
          <div className="mb-12 px-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src="portfolio/3.png"
                alt="Technical Documentation"
                className="w-full"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Technical Documentation
            </h3>
            <p className="font-normal text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              nesciunt perferendis facere.
            </p>
          </div>
          <div className="mb-12 px-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src="portfolio/4.png"
                alt="Tribute Page"
                className="w-full"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Tribute Page
            </h3>
            <p className="font-normal text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              nesciunt perferendis facere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
