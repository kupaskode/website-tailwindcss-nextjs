import Link from 'next/link';

export default function Clients() {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Yang Pernah Bekerjasama
            </h2>
            <p className="font-medium text-base md:text-lg text-slate-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique repellendus fugiat veritatis.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="clients/google.svg" alt="Google" />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="clients/gojek.svg" alt="Gojek" />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="clients/tokopedia.svg" alt="Tokopedia" />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8">
                <img src="clients/traveloka.svg" alt="Traveloka" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
