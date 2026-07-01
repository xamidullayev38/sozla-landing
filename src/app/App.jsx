import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { getTheme, setTheme } from "../features/theme-toggle/model/theme";
import MainLayout from "./../widgets/layout/MainLayout";
import Contact from './../pages/Contact';
import Faq from "../pages/Faq";
import ScrollTop from "../shared/ui/ScrollTop";

const theme = getTheme();
setTheme(theme);

export default function App() {
  const lenisOptions = {
    duration: 1.8,       
    lerp: 0.05,          
    wheelMultiplier: 0.7, 
    smoothTouch: false, 
    infinite: false,
  };

  return (
    <>
    <ReactLenis root options={lenisOptions}>
      <ScrollTop />
      <Routes>
        <Route element={<MainLayout />}> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="*" element={<h1>not found</h1>}/>
      </Routes>
    </ReactLenis>
    </>
  );
}