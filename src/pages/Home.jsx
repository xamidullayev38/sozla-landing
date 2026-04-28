import Button from "../shared/ui/Button";
import Feature from "../widgets/home/Feature";
import Hero from "../widgets/home/Hero";
import HowItWorks from "../widgets/home/HowItWorks";
import Navbar from "../widgets/Navbar";
import Problems from './../widgets/home/Problems';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Feature />
      <HowItWorks />
    </>
  )
}