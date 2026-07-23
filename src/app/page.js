import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      {/* Підключаємо оновлену навігацію з бургер-меню */}
      <Navbar />

      {/* Головний контент із відступом під шапку */}
      <main className="pt-16 bg-slate-900 text-slate-100">
        {/* Головний екран (Hero) */}
        <section
          id="hero"
          className="min-h-screen bg-slate-900 flex items-center justify-center px-4"
        >
          <div className="text-center max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-sky-400 leading-tight">
              Психологічна допомога
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Консультації для тих, хто цього потребує. Безпечний простір та
              підтримка.
            </p>
          </div>
        </section>

        {/* Блок "Про мене" */}
        <section
          id="about"
          className="min-h-screen bg-slate-800/60 flex items-center justify-center border-t border-slate-800 px-4"
        >
          <div className="text-center max-w-xl">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-sky-300">
              Про мене
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Тут буде ваша професійна історія, освіта та волонтерський досвід.
            </p>
          </div>
        </section>

        {/* Блок "Напрямки" */}
        <section
          id="services"
          className="min-h-screen bg-slate-900 flex items-center justify-center border-t border-slate-800 px-4"
        >
          <div className="text-center max-w-xl">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-sky-300">
              Напрямки допомоги
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Тривожність, ПТСР, адаптація, підтримка у кризових ситуаціях.
            </p>
          </div>
        </section>

        {/* Блок "Контакти" */}
        <section
          id="contacts"
          className="min-h-screen bg-slate-800/60 flex items-center justify-center border-t border-slate-800 px-4"
        >
          <div className="text-center max-w-xl">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-sky-300">
              Контакти
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Форма запису, Telegram, Viber або Email.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
