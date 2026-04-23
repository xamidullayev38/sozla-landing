import Button from "../shared/ui/Button";
import Hero from "../widgets/home/Hero";
import Navbar from "../widgets/Navbar";
import Problems from './../widgets/home/Problems';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
    </>
  )
}