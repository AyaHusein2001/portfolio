import {  IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import InlineLink from "./InlineLink";
import Link from "next/link";
import LetsConnectForm from "./LetsConnectForm";

const LetsConnect = () => {
  
  return (
    <Grid
      container
      id="lets-connect"
      sx={{
        justifyContent: "space-between",
        padding: { xs: "6.4rem", lg: "10.8rem" },
        paddingTop: { xs: "4rem", lg: "12.2rem" },
        alignItems: "center",
        gap: { xs: "4rem", lg: "1rem" },
        // height: "62rem",
      }}
    >
      <Grid
        columns={{ xs: 6, lg: 12 }}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        direction={"column"}
        alignSelf={"flex-start"}
      >
        <Grid>
          <Typography variant="h1">LET'S CONNECT</Typography>
          <Typography variant="h6">
            say hello at{" "}
            <InlineLink
              text="aya.ahmed2001.aa@gmail.com"
              link="mailto:aya.ahmed2001.aa@gmail.com"
            />
          </Typography>
          <Typography variant="h6">
            For more Info ,{" "}
            <InlineLink
              text="here is my resume"
              link="https://drive.google.com/uc?export=view&id=1zhBOaNcBLopSxqtRfmj2moO2mMlWRyzH"
            />
          </Typography>

          <Stack direction="row" sx={{ gap: "1.6rem", paddingTop: "4rem" }}>
            <Link href="https://github.com/AyaHusein2001">
              <IconButton sx={{ backgroundColor: "transparent" }}>
                <FaGithub size={32} color="#61d5ff" />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/aya-ahmed-50106914a/">
              <IconButton sx={{ backgroundColor: "transparent" }}>
                <FaLinkedinIn size={32} color="#61d5ff" />
              </IconButton>
            </Link>
          </Stack>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'flex-end'}}>
          <Typography sx={{ paddingY:'2rem' }} variant="h6">
            © 2024 Aya Ahmed
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ height: "100%" }} columns={{ xs: 6, lg: 12 }}>
        <LetsConnectForm/>
      </Grid>
    </Grid>
  );
};

export default LetsConnect;
