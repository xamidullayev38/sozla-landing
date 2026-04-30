import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { getTheme, setTheme } from "../features/theme-toggle/model/theme";
import MainLayout from "./../widgets/layout/MainLayout";
import Contact from './../pages/Contact';
import Faq from "../pages/Faq";

const theme = getTheme();
setTheme(theme);
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
      <Route path="*" element={<h1>not found</h1>}/>

    </Routes>
  );
}
