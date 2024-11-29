'use client'
import { useEffect, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomLink from "./CustomLink";
gsap.registerPlugin(ScrollTrigger);

const ProjectContent: React.FC<{
  id:string;
  title: string;
  description: string;
  year: string;
  role: string;
  demo: string;
  repo: string;
}> = ({ title, description, year, role, demo, repo ,id}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Title animation
    gsap.fromTo(
      `#${id} .title`,
      { y: 100, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `#${id} .title`,
          start: "top 80%", 
          toggleActions: "restart none none none",
        },
      }
    );

    // Description word-by-word animation
    const descEl = container.querySelector(".description");
    if (descEl) {
      const words = descEl.textContent?.split(" ") || [];
      descEl.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      const wordEls = descEl.querySelectorAll(".word");
      gsap.fromTo(
        wordEls,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `#${id} .description`,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
          delay: 0.5, 
        }
      );
    }

    // Info items slide-up animation
    gsap.fromTo(
      `#${id} .info-item`,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `#${id} .info-item`,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
        delay: 2.5, // Delay after description
      }
    );
  }, [id]);

  return (
    <Box
    id={id}
      ref={containerRef}
      sx={{
        width: { xs: '34.3rem', lg: '57rem' },
        paddingLeft: { xs: "0", lg: "3rem" },
        paddingRight: { xs: "0", lg: "3rem" },
        paddingTop: "3.5rem",
      }}
    >
      <Typography className="title" sx={{ paddingBottom: "1.6rem" }} variant="h2">
        {title}
      </Typography>

      <Typography className="description" sx={{ width: { xs: '34.3rem', lg: '52rem' } }} variant="h6">
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
        <Box className="info-item" sx={{ display: "flex", paddingTop: "30px", gap: "24px" }}>
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
