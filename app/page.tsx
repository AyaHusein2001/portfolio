import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import { Box, Divider } from "@mui/material";

export default function Home() {
  return (
    
    <Box>
      <Hero />
      <Divider sx={{borderColor:'#484848'}} />
      
<FeaturedProjects />
    </Box>
  );
}
