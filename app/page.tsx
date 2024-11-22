import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import { Divider } from "@mui/material";
import theme from "@/global/theme";

import { ThemeProvider } from "@mui/material/styles";


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <Divider />

      <FeaturedProjects />
      <Divider />
      <About />
    </ThemeProvider>
  );
}
