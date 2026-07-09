import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      {/* Підключаємо нашу навігацію */}
      <Navbar />

      {/* Головний контент із відступом під шапку */}
      <main className="pt-16">
        {/* Головний екран (Hero) */}
        <section
          id="hero"
          className="min-h-screen bg-slate-50 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-600">
              Психологічна допомога
            </h1>
            <p className="text-gray-600">
              Консультації для тих, хто цього потребує
            </p>
          </div>
        </section>

        {/* Блок "Про мене" */}
        <section
          id="about"
          className="min-h-screen bg-white flex items-center justify-center border-t"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Про мене</h2>
            <p className="text-gray-600 max-w-md">
              Тут буде ваша професійна історія, освіта та волонтерський досвід.
            </p>
          </div>
        </section>

        {/* Блок "Напрямки" */}
        <section
          id="services"
          className="min-h-screen bg-slate-50 flex items-center justify-center border-t"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Напрямки допомоги</h2>
            <p className="text-gray-600">
              Тривожність, ПТСР, підтримка у кризових ситуаціях.
            </p>
          </div>
        </section>

        {/* Блок "Контакти" */}
        <section
          id="contacts"
          className="min-h-screen bg-white flex items-center justify-center border-t"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Контакти</h2>
            <p className="text-gray-600">
              Форма запису, Telegram, Viber або Email.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
