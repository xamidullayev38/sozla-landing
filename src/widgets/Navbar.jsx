import React, { useState } from "react";
import Button from "@/shared/ui/Button";
import logo from "@assets/img/nav/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/">Asosiy</Link>
          <Link to="/about">Ilova haqida</Link>
          <Link to="/about">Biz haqimizda</Link>
          <Link to="/contact">Bog‘lanish</Link>
          <Link to="/faq">FAQ</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <select className="outline-none bg-transparent text-gray-700">
            <option>O‘zbek</option>
            <option>Русский</option>
            <option>English</option>
          </select>

          <Button className="bg-primary text-white px-5 py-2 rounded-full">
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
          
          {/* Panel */}
          <div className="bg-white h-full w-full p-6 flex flex-col">
            
            {/* Top */}
            <div className="flex items-center justify-between mb-8">
              <img src={logo} alt="Logo" className="h-8" />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 transition"
              >
                ✕
              </button>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800">
              <Link to="/" onClick={() => setIsOpen(false)}>Asosiy</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>Ilova haqida</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>Biz haqimizda</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Bog‘lanish</Link>
              <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
            </nav>

            {/* Bottom */}
            <div className="mt-auto flex flex-col gap-4">
              
              <select className="border rounded-lg px-4 py-3">
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
      )}
    </header>
  );
}