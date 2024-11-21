import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import LetsConnect from "@/components/LetsConnect";
import { Box, Divider } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Divider sx={{ borderColor: "#484848" }} />

      <FeaturedProjects />
      <Divider sx={{ borderColor: "#484848" }} />
      <About />
      <Divider sx={{ borderColor: "#484848" }} />
      <LetsConnect />
    </Box>
  );
}
