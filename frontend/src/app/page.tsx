"use client";
import { motion } from "framer-motion";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import MissionAndValues from "./components/Home/MissionAndValues";
import Testimonials from "./components/Home/Testimonials";
import Skills from "./components/Home/Skills";
export default function Home() {
  return (
    <div className="bg-background ">
     
     <Hero />
     <About />

     <Skills/>
     <MissionAndValues />

     <Testimonials />
    </div>
  );
}
