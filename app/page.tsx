import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import { Divider } from "@mui/material";
import LetsConnect from "@/components/LetsConnect";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />

      <FeaturedProjects />
      <Divider />
      <About />
      <Divider />
      <LetsConnect />
    </>
    
  );
}
