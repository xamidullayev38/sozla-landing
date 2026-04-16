import React, { useEffect, useState } from "react";
import Button from "@/shared/ui/Button";
import logo from "@assets/img/nav/logo.png";
import { Link } from "react-router-dom";
import ThemeToggle from "@/features/theme-toggle/ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto">
        <div className=" max-w-7xl mx-auto py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
            <Link className="hover:text-primary transition">Asosiy</Link>
            <Link className="hover:text-primary transition">Ilova haqida</Link>
            <Link className="hover:text-primary transition">Biz haqimizda</Link>
            <Link className="hover:text-primary transition">Bog‘lanish</Link>
            <Link className="hover:text-primary transition">FAQ</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <select className="bg-transparent text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none focus:border-primary transition pb-1">
              <option className="bg-white text-black">O‘zbek</option>
              <option className="bg-white text-black">Русский</option>
              <option className="bg-white text-black">English</option>
            </select>

            <Button className="bg-primary text-white px-5 py-2 rounded-full hover:opacity-90">
              Yuklab olish
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center border rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 z-50">
            <div className="bg-[#F8F9FA] h-screen w-full flex flex-col px-5 pb-4">
              <div className="max-w-md w-full mx-auto flex flex-col h-full">
                {/* Top */}
                <div className="flex items-center justify-between py-4 border-b border-gray-200 mb-6">
                  <img src={logo} alt="Logo" className="h-8" />

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border bg-white hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>

                {/* Menu */}
                <nav className="flex flex-col gap-2">
                  <Link className="px-4 py-3 rounded-xl hover:bg-white">
                    Asosiy
                  </Link>
                  <Link className="px-4 py-3 rounded-xl hover:bg-white">
                    Ilova haqida
                  </Link>
                  <Link className="px-4 py-3 rounded-xl hover:bg-white">
                    Biz haqimizda
                  </Link>
                  <Link className="px-4 py-3 rounded-xl hover:bg-white">
                    Bog‘lanish
                  </Link>
                  <Link className="px-4 py-3 rounded-xl hover:bg-white">
                    FAQ
                  </Link>
                </nav>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                {/* Bottom */}
                <div className="mt-auto bg-white p-4 rounded-2xl shadow-sm flex flex-col gap-4">
                  <select className="border rounded-xl px-4 py-3">
                    <option>O‘zbek</option>
                    <option>Русский</option>
                    <option>English</option>
                  </select>

                  <Button className="bg-primary text-white py-3 rounded-full w-full text-lg">
                    Yuklab olish
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
