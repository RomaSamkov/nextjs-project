import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Логотип або Ім'я */}
        <div className="font-bold text-xl text-emerald-600">
          <Link href="#hero">Психолог-Волонтер</Link>
        </div>

        {/* Пункти меню (Якірні посилання) */}
        <div className="flex gap-6 font-medium text-gray-600">
          <Link href="#about" className="hover:text-emerald-600 transition">
            Про мене
          </Link>
          <Link href="#services" className="hover:text-emerald-600 transition">
            Напрямки допомоги
          </Link>
          <Link href="#contacts" className="hover:text-emerald-600 transition">
            Контакти
          </Link>
        </div>
      </div>
    </nav>
  );
}
