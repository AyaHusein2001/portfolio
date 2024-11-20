import { Box } from "@mui/material";
import React from "react";
import CustomTitle from "./CustomTitle";
import CustomDescription from "./CustomDescription";
import Project from "./Project";

const FeaturedProjects = () => {
  return (
    <Box
      sx={{
        paddingX: "10.8rem",
        paddingY: "8rem",
      }}
    >
      <CustomTitle title="Featured Projects" color="#ffffff" size={7} />
      <CustomDescription
        description="Here are some of the selected projects that showcase my passion for front-end development."
        color="#C7C7C7"
        size={1.6}
        
      />

      <Project />
    </Box>
  );
};

export default FeaturedProjects;
