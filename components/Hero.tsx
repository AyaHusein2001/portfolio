import { Box, IconButton } from "@mui/material";
import CustomTitle from "./CustomTitle";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomDescription from "./CustomDescription";
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
      <Box sx={{ display: "flex", gap: "4rem", flexDirection: "column" }}>
        <Box>
          <CustomTitle
            title={
              <>
                HI,I AM <br />
                AYA AHMED.{" "}
              </>
            }
            color="#ffffff"
            size={10.1}
          />
        </Box>
        <CustomDescription
          description="A Sydney based front-end developer passionate about building accessible and user friendly websites."
          color="#C7C7C7"
          size={1.6}
          width={54.4}
        />
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
