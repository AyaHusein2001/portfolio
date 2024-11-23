import { Stack, Typography } from "@mui/material";
import CustomTitle from "./CustomTitle";
import Grid from "@mui/material/Grid2";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomContainedButton from "./CustomContainedButton";
import { FaXTwitter } from "react-icons/fa6";
import CustomTextField from "./CustomTextField";
import Link from "next/link";
import InlineLink from "./InlineLink";

const LetsConnect = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        padding: { xs: "6.4rem", lg: "10.8rem" },
        paddingTop: { xs: "4rem", lg: "12.2rem" },
        alignItems: "center",
        gap: { xs: "4rem", lg: "1rem" },
      }}
    >
      <Stack direction={"column"} alignSelf={"flex-start"}>
        <Typography variant="h1">LET'S CONNECT</Typography>
        <Typography variant="h6">
        say hello at <InlineLink text='aya.ahmed2001.aa@gmail.com' link='/' />
          
        </Typography>
        <Typography variant="h6">For more Info , <InlineLink text='here is my resume' link='/' /></Typography>

        <Stack direction="row" sx={{ gap: "2.4rem", paddingTop: "4rem" }}>
          <FaGithub size={32} color="#D3E97A" />
          <FaLinkedinIn size={32} color="#D3E97A" />
          <FaXTwitter size={32} color="#D3E97A" />
          <FaInstagram size={32} color="#D3E97A" />
        </Stack>
        <Typography sx={{ alignSelf: "flex-end" }} variant="h6">
          © 2023 Robert Garcia
        </Typography>
      </Stack>

      <Stack sx={{ gap: "2.4rem" }}>
        <CustomTextField label="Name" multiline={false} />
        <CustomTextField label="Email" multiline={false} />
        <CustomTextField label="Subject" multiline={false} />
        <CustomTextField label="Message" multiline={true} />
        <CustomContainedButton text="SUBMIT" />
      </Stack>
    </Grid>
  );
};

export default LetsConnect;
