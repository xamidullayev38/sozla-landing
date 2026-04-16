import React, { useEffect, useState } from "react";
import Button from "@/shared/ui/Button";
import logo from "@assets/img/nav/logo.png";
import { Link } from "react-router-dom";
import ThemeToggle from "@/features/theme-toggle/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
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
            <Menu size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          
          {/* Panel */}
          <div className="bg-[#F8F9FA] dark:bg-gray-900 
            h-[100dvh] w-full flex flex-col px-5 pt-4 pb-[env(safe-area-inset-bottom)] 
            overflow-y-auto">

            {/* Top */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
              <img src={logo} alt="Logo" className="h-8" />

              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl border 
                bg-white dark:bg-gray-800 
                text-gray-700 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-2 text-gray-800 dark:text-gray-200">
              {["Asosiy", "Ilova haqida", "Biz haqimizda", "Bog‘lanish", "FAQ"].map((item) => (
                <Link
                  key={item}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Theme */}
            <div className="flex items-center justify-between mt-6 text-gray-700 dark:text-gray-300">
              <span>Theme</span>
              <ThemeToggle />
            </div>

            {/* Bottom */}
            <div className="mt-auto bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex flex-col gap-4">
              
              <select className="border rounded-xl px-4 py-3 
                bg-white dark:bg-gray-700 
                text-gray-700 dark:text-gray-200">
                <option>O‘zbek</option>
                <option>Русский</option>
                <option>English</option>
              </select>

              <Button className="bg-primary text-white py-3 rounded-full w-full text-lg hover:opacity-90">
                Yuklab olish
              </Button>
            </div>

          </div>
        </div>
      )}
      </div>
    </header>
  );
}
