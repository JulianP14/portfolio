import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import HomeSite from '@/components/Home';
import Navbar from "@/components/Navbar";
import Portfolio from '@/components/Portfolio';
import SocialLinks from "@/components/SocialLinks";
import './globals.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSite />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </main>
  )
}
