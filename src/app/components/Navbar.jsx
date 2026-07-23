"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Логотип / Ім'я */}
        <Link
          href="#hero"
          onClick={closeMenu}
          className="font-bold text-lg sm:text-xl text-sky-400 hover:text-sky-300 transition"
        >
          Doctor Igrunova
        </Link>

        {/* Десктопне меню (для екранів від md) */}
        <div className="hidden md:flex gap-8 font-medium text-slate-300">
          <Link href="#about" className="hover:text-sky-400 transition">
            Про мене
          </Link>
          <Link href="#services" className="hover:text-sky-400 transition">
            Напрямки
          </Link>
          <Link href="#contacts" className="hover:text-sky-400 transition">
            Контакти
          </Link>
        </div>

        {/* Кнопка Бургер-меню (для мобільних та планшетів) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2"
          aria-label="Переключити меню"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // Іконка Хрестик (Закрити)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Іконка Гамбургер (Відкрити)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Выпадаюче Мобільне Меню */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 flex flex-col gap-4 text-slate-200 font-medium">
          <Link
            href="#about"
            onClick={closeMenu}
            className="py-2 hover:text-sky-400 transition border-b border-slate-800/50"
          >
            Про мене
          </Link>
          <Link
            href="#services"
            onClick={closeMenu}
            className="py-2 hover:text-sky-400 transition border-b border-slate-800/50"
          >
            Напрямки
          </Link>
          <Link
            href="#contacts"
            onClick={closeMenu}
            className="py-2 hover:text-sky-400 transition"
          >
            Контакти
          </Link>
        </div>
      )}
    </nav>
  );
}
