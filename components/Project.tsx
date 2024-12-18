import React from "react";
import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectContent from "./ProjectContent";

const Project: React.FC<{
  id:string;
  title: string;
  description: string;
  image: string;
  year: string;
  role: string;
  demo: string;
  repo: string;
  projectType:string;
}> = ({ title, description, image, year, role, demo, repo,projectType,id }) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid sx={{ paddingY: "6rem" }} container spacing={2}>
        <Grid>
          <ProjectCard  projectType={projectType} title={title} image={image} />
        </Grid>
        <Grid>
          <ProjectContent
          id={id}
            title={title}
            description={description}
            year={year}
            role={role}
            demo={demo}
            repo={repo}
            
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;