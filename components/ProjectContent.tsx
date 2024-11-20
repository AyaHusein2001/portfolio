import { Box, Divider, Link } from "@mui/material";
import React from "react";
import { Manrope } from "next/font/google";
import CustomHeader from "./CustomHeader";
import CustomDescription from "./CustomDescription";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const ProjectContent = () => {
  return (
    <Box sx={{ paddingLeft: "3rem", paddingTop: "3.5rem" }}>
      <CustomHeader
        title="Promotional landing page for our favorite show"
        color="#ffffff"
        size={3.2}
        weight={500}
        paddingBottom={1.6}
        width={57.6}
        xsWidth={34.3}
      />
      <CustomDescription
        description="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."
        color="#C7C7C7"
        size={1.6}
        width={57.6}
        xsWidth={34.3}
      />
      <Box sx={{ paddingTop: "2rem" }}>
        <CustomHeader
          title="PROJECT INFO"
          color="#ffffff"
          size={1.6}
          weight={600}
          paddingBottom={1.6}
        />
        <Divider sx={{ borderColor: "#484848" }} />

        <Box
          sx={{
            display: "flex",
            paddingY: "1rem",
            justifyContent: "space-between",
          }}
        >
          <CustomDescription description="Year" color="#fff" size={1.6} />
          <CustomDescription description="2023" color="#C7C7C7" size={1.6} />
        </Box>
        <Divider sx={{ borderColor: "#484848" }} />
        <Box
          sx={{
            display: "flex",
            paddingY: "1rem",
            justifyContent: "space-between",
          }}
        >
          <CustomDescription description="Client" color="#fff" size={1.6} />
          <CustomDescription
            description="World News"
            color="#C7C7C7"
            size={1.6}
          />
        </Box>
        <Divider sx={{ borderColor: "#484848" }} />
        <Box
          sx={{
            display: "flex",
            paddingY: "1rem",
            justifyContent: "space-between",
          }}
        >
          <CustomDescription description="Role" color="#fff" size={1.6} />
          <CustomDescription
            description="Front-end Developer"
            color="#C7C7C7"
            size={1.6}
          />
        </Box>
        <Divider sx={{ borderColor: "#484848" }} />

        <Box sx={{ display: "flex", paddingTop: "30px", gap: "24px" }}>
          <Link
            fontWeight={700}
            sx={{
              borderColor: "#D3E97A",
              borderBottom: "2px solid",
              paddingBottom: "4px",
              display: "flex",
              alignItems: "center",
            }}
            fontSize={16}
            color="#D3E97A"
            href="#"
            underline="none"
          >
            LIVE DEMO
            <MdArrowOutward
              style={{ margin: "4px", fontWeight: "700px" }}
              size={24}
            />
          </Link>

          <Link
            fontWeight={700}
            sx={{
              borderColor: "#D3E97A",
              borderBottom: "2px solid",
              paddingBottom: "4px",
              display: "flex",
              alignItems: "center",
            }}
            fontSize={16}
            color="#D3E97A"
            href="#"
            underline="none"
          >
            SEE ON GITHUB
            <FaGithub
              style={{ margin: "4px", fontWeight: "700px" }}
              size={24}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectContent;
