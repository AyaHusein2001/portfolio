import React from "react";
import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectContent from "./ProjectContent";

const Project = () => {
  return (
    <Box sx={{ width:'100%',height:'100%' }}>
    <Grid sx={{ paddingY: "8rem" }} container spacing={2}>
      <Grid>
        <ProjectCard />
      </Grid>
      <Grid>
        <ProjectContent />
      </Grid>
    </Grid>
    </Box>
  );
};

export default Project;
