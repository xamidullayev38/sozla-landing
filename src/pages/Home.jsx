import Button from "../shared/ui/Button";
import Footer from "../widgets/Footer";
import Exercices from "../widgets/home/Exercises";
import Feature from "../widgets/home/Feature";
import Hero from "../widgets/home/Hero";
import HowItWorks from "../widgets/home/HowItWorks";
import Navbar from "../widgets/Navbar";
import Problems from './../widgets/home/Problems';

export default function Home() {  
  return (
    <>
      <Hero />
      <Problems />
      <Feature />
      <HowItWorks />
      <Exercices />
    </>
  )
}