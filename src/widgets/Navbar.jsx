import React from "react";
import Button from "@/shared/ui/Button";
import logo from "@assets/img/nav/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/">Asosiy</Link>
          <Link to="about">Ilova haqida</Link>
          <Link to="about">Biz haqimizda</Link>
          <Link to="contact">Bog‘lanish</Link>
          <Link to="">FAQ</Link>
        </nav>

        {/* 🔹 Right side */}
        <div className="flex items-center gap-4">
          {/* Language */}
          <select className="outline-none bg-transparent text-gray-700">
            <option>O‘zbek</option>
            <option>Русский</option>
            <option>English</option>
          </select>

          {/* Button */}
          <Button>Yuklab olish ⬇</Button>
        </div>
      </div>
    </header>
  );
}
