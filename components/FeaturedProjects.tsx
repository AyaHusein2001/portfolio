import { Box, Typography } from "@mui/material";
import React from "react";
import CustomTitle from "./CustomTitle";
import Project from "./Project";
import projects from "@/data/projects";
const FeaturedProjects = () => {
  return (
    <Box
      sx={{
        paddingX: "10.8rem",
        paddingY: "8rem",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "7.6rem" }}>
        {" "}
        Featured Projects
      </Typography>

      <Typography width={540} variant="h6">
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </Typography>

      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          image={project.image}
          description={project.description}
          year={project.year}
          role={project.role}
          demo={project.demo}
          repo={project.repo}
          projectType={project.projectType}
        />
      ))}
    </Box>
  );
};

export default FeaturedProjects;
