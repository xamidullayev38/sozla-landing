import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { getTheme, setTheme } from "../model/theme";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState(() => getTheme());

const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme); 
  setThemeState(newTheme); 
};

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}