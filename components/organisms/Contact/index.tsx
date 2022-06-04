export default function Contact() {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
              Hubungi Kami
            </h2>
            <p className="font-medium text-base md:text-lg text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              distinctio.
            </p>
          </div>
        </div>
        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 pb-8">
              <label
                htmlFor="name"
                className="text-base text-primary font-bold"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 pb-8">
              <label
                htmlFor="email"
                className="text-base text-primary font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 pb-8">
              <label
                htmlFor="message"
                className="text-base text-primary font-bold"
              >
                Pesan
              </label>
              <textarea
                id="message"
                className="w-full h-52 bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4">
              <button className="btn-primary w-full">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
