import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Statistics />
  <Features />
  <Testimonials />
</>
  );
}