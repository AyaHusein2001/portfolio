import { Box, IconButton, Typography } from "@mui/material";
import CustomTitle from "./CustomTitle";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomContainedButton from "./CustomContainedButton";
const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: { xs: "6.4rem", lg: "10.8rem" },
        paddingTop: { xs: "4rem", lg: "3rem" },
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "4rem", lg: "1rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: { xs: "34.3rem", lg: "54.4rem" },
          gap: "4rem",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="h1">
            HI,I AM <br />
            AYA AHMED.
          </Typography>
        </Box>

        <Typography variant="h6">
          A Sydney based front-end developer passionate about building
          accessible and user friendly websites.
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomContainedButton
            icon={<FaCircle size={10} />}
            text="Contact Me"
          />
          <IconButton
            sx={{
              backgroundColor: "#222222",
              width: "5.4rem",
              height: "5.4rem",
            }}
            aria-label="linkedin"
          >
            <FaLinkedinIn color="#D3E97A" />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#222222",
              width: "5.4rem",
              height: "5.4rem",
            }}
            aria-label="linkedin"
          >
            <FaGithub color="#D3E97A" />
          </IconButton>
        </Box>
      </Box>

      <Box>
        {/**src="https://drive.google.com/file/d/14M1AjMqOlYOhNwKw5DCCLrmqEXTHTNsq/view?usp=sharing"  */}
        {/**src="https://drive.google.com/uc?export=view&id=14M1AjMqOlYOhNwKw5DCCLrmqEXTHTNsq"  */}
        <Image
          src="https://drive.google.com/uc?export=view&id=14M1AjMqOlYOhNwKw5DCCLrmqEXTHTNsq"
          alt="aya"
          width={500}
          height={600}
          style={{ borderRadius: "2rem" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
