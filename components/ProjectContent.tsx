import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CustomHeader from "./CustomHeader";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomLink from "./CustomLink";

const ProjectContent: React.FC<{
  title: string;
  description: string;

  year: string;
  role: string;
  demo: string;
  repo: string;
}> = ({ title, description, year, role, demo, repo }) => {
  return (
    <Box
      sx={{
        width: 576,
        paddingLeft: { xs: "0", lg: "3rem" },
        paddingTop: "3.5rem",
      }}
    >
      <Typography sx={{ paddingBottom: "1.6rem" }} variant="h2">
        {title}
      </Typography>

      <Typography width={576} variant="h6">
        {description}
      </Typography>

      <Box sx={{ paddingTop: "2rem" }}>
        <Typography
          fontSize={16}
          fontWeight={600}
          sx={{ paddingBottom: "1.6rem" }}
          variant="h2"
        >
          PROJECT INFO
        </Typography>

        <Divider />

        <Box
          sx={{
            display: "flex",
            paddingY: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Typography color="#fff" variant="h6">
            Year
          </Typography>
          <Typography variant="h6">{year}</Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            display: "flex",
            paddingY: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Typography color="#fff" variant="h6">
            Role
          </Typography>
          <Typography variant="h6">{role}</Typography>
        </Box>
        <Divider />

        <Box sx={{ display: "flex", paddingTop: "30px", gap: "24px" }}>
          <CustomLink
            link={demo}
            children={
              <>
                LIVE DEMO
                <MdArrowOutward
                  style={{ margin: "4px", fontWeight: "700px" }}
                  size={24}
                />
              </>
            }
          />
          <CustomLink
            link={repo}
            children={
              <>
                SEE ON GITHUB
                <FaGithub
                  style={{ margin: "4px", fontWeight: "700px" }}
                  size={24}
                />
              </>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectContent;
