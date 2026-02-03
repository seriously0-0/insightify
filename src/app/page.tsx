import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/pricing";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";


export default function Home(){
  return(
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <About />
      <CTA />
      <Footer></Footer>
    </main>
  )
}