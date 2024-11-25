import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomContainedButton from "./CustomContainedButton";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";
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
          A full-stack developer passionate about creating responsive,
          user-friendly web applications and innovative software solutions.
        </Typography>

        <Box sx={{ display: "flex",alignItems:'center', gap: "1rem" }}>
          <CustomContainedButton
            link="#lets-connect"
            xsIcon={
              <BsFillArrowUpRightCircleFill
                style={{ marginLeft: "2rem" }}
                size={35}
              />
            }
            lgIcon={<FaCircle style={{ marginLeft: "2rem" }} size={10} />}
            text="Contact Me"
          />
          <Link href="https://www.linkedin.com/in/aya-ahmed-50106914a/">
            <IconButton aria-label="linkedin">
              <FaLinkedinIn color="#61d5ff" />
            </IconButton>
          </Link>
          <Link href="https://github.com/AyaHusein2001">
            <IconButton aria-label="github">
              <FaGithub color="#61d5ff" />
            </IconButton>
          </Link>
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
