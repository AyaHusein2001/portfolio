"use client";
import { useEffect, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { slideIn, wordByWord } from "@/util/animation";

const ProjectContent: React.FC<{
  id: string;
  title: string;
  description: string;
  year: string;
  role: string;
  demo: string;
  repo: string;
}> = ({ title, description, year, role, demo, repo, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    slideIn("up", `#${id} .title`, `#${id} .title`, 0);

    const descEl = container.querySelector(".description");
    if (descEl) {
      wordByWord(`#${id} .description`, descEl);
    }

    slideIn("up", `#${id} .info-item`, `#${id} .info-item`, 2.5);
  }, [id]);

  return (
    <Box
      id={id}
      ref={containerRef}
      sx={{
        width: { xs: "34.3rem", lg: "57rem" },
        paddingLeft: { xs: "0", lg: "3rem" },
        paddingRight: { xs: "0", lg: "3rem" },
        paddingTop: "3.5rem",
      }}
    >
      <Typography
        className="title"
        sx={{ paddingBottom: "1.6rem" }}
        variant="h2"
      >
        {title}
      </Typography>

      <Typography
        className="description"
        sx={{ width: { xs: "34.3rem", lg: "52rem" } }}
        variant="h6"
      >
        {description}
      </Typography>

      <Box className="info-item" sx={{ paddingTop: "2rem" }}>
        <Typography
          fontSize={16}
          fontWeight={600}
          sx={{ paddingBottom: "1.6rem" }}
          variant="h2"
        >
          PROJECT INFO
        </Typography>

        <Divider className="info-item" />

        <Box
          className="info-item"
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
        <Divider className="info-item" />

        <Box
          className="info-item"
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
        <Divider className="info-item" />
        <Box
          className="info-item"
          sx={{ display: "flex", paddingTop: "30px", gap: "24px" }}
        >
          {demo && (
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
          )}
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
