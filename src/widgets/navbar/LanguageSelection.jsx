import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("O‘zbek");

  const languages = [
    "O‘zbek",
    "Русский",
    "English"
  ];

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 w-16
          text-sm
          text-gray-700
          dark:text-gray-200
          transition
        "
      >
        {lang}

        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>


      {open && (
        <div
          className="
            absolute
            right-0
            top-8
            w-32
            rounded-xl
            overflow-hidden
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            shadow-xl
            z-50
          "
        >

          {languages.map((item)=>(
            <button
              key={item}
              onClick={()=>{
                setLang(item);
                setOpen(false);
              }}
              className="
                w-full
                px-4
                py-2
                text-left
                text-sm
                text-gray-700
                dark:text-gray-200
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
              "
            >
              {item}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}