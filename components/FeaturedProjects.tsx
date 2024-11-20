import { Box } from "@mui/material";
import React from "react";
import CustomTitle from "./CustomTitle";
import CustomDescription from "./CustomDescription";
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
      <CustomTitle title="Featured Projects" color="#ffffff" size={7} />
      <CustomDescription
        description="Here are some of the selected projects that showcase my passion for front-end development."
        color="#C7C7C7"
        size={1.6}
      />
      {projects.map((project) => (
        <Project
          title={project.title}
          image={project.image}
          description={project.description}
          year={project.year}
          role={project.role}
          demo={project.demo}
          repo={project.repo}
        />
      ))}
    </Box>
  );
};

export default FeaturedProjects;
