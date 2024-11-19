import { Box, IconButton } from "@mui/material";
import CustomTitle from "./CustomTitle";
import Image from "next/image";
import { BorderAllRounded } from "@mui/icons-material";
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
        padding: { xs: "16px", lg: "108px" },
        paddingTop: { xs: "40px", lg: "30px" },
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "40px", lg: "10px" },
      }}
    >
      <Box sx={{ display: "flex", gap: "40px", flexDirection: "column" }}>
        <Box>
          <CustomTitle
            title={
              <>
                HI,I AM <br />
                AYA AHMED.{" "}
              </>
            }
            color="#ffffff"
            size={101}
          />
        </Box>
        <CustomDescription
          description="A Sydney based front-end developer passionate about building accessible and user friendly websites."
          color="#C7C7C7"
          size={18}
        />
        <Box sx={{ display: "flex", gap: "16px" }}>
          <CustomContainedButton />
          <IconButton
            sx={{ backgroundColor: "#222222", width: "54px", height: "54px" }}
            aria-label="linkedin"
          >
            <FaLinkedinIn color="#D3E97A" />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "#222222", width: "54px", height: "54px" }}
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
          style={{ borderRadius: "20px" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
