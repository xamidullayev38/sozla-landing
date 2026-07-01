import React, { useEffect, useState } from "react";
import Button from "@/shared/ui/Button";
import logo from "@assets/img/sozla.svg";
import { Link } from "react-router-dom";
import ThemeToggle from "@/features/theme-toggle/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import LanguageSelect from "./navbar/LanguageSelection";

const menu = [
  { name: "Asosiy", path: "/" },
  { name: "Biz haqimizda", path: "/about" },
  { name: "Bog‘lanish", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Komponent unmount bo'lganda tozalash
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-700/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Max-w va mx-auto qo'shildi, ekrandan chiqib ketmasligi uchun */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="w-full py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
            {menu.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-primary transition">
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <LanguageSelect />
            <Button className="bg-primary text-white px-5 py-2 rounded-full hover:opacity-90">
              Yuklab olish
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center border rounded-lg text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed holatga o'tkazildi va ortiqcha dublikat div olib tashlandi */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#F8F9FA] dark:bg-gray-900 h-[100dvh] w-screen flex flex-col px-5 pt-4 pb-[env(safe-area-inset-bottom)] overflow-y-auto"
        >
          {/* Top */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
            <img src={logo} alt="Logo" className="h-8" />
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <X size={22} />
            </button>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-2 text-gray-800 dark:text-gray-200">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme */}
          <div className="flex items-center justify-between mt-6 text-gray-700 dark:text-gray-300">
            <span>Theme</span>
            <ThemeToggle />
          </div>

          {/* Bottom */}
          <div className="mt-auto bg-white dark:bg-gray-800 p-4 mb-2 rounded-2xl shadow-sm flex flex-col gap-4">
            <LanguageSelect />
            <Button className="bg-primary text-white py-3 rounded-full w-full text-lg hover:opacity-90">
              Yuklab olish
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  );
}