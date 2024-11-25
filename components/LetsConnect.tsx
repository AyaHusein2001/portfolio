import { Button, Stack, Typography } from "@mui/material";
import { Manrope } from "next/font/google";
import Grid from "@mui/material/Grid2";
import {  FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomTextField from "./CustomTextField";
import InlineLink from "./InlineLink";
import { sendEmail } from "@/lib/actions";
import Link from "next/link";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

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
      }}
    >
      <Stack direction={"column"} alignSelf={"flex-start"}>
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

        <Stack direction="row" sx={{ gap: "2.4rem", paddingTop: "4rem" }}>
          <Link href="https://github.com/AyaHusein2001">
            <FaGithub size={32} color="#61d5ff" />
          </Link>
          <Link href="https://www.linkedin.com/in/aya-ahmed-50106914a/">
            <FaLinkedinIn size={32} color="#61d5ff" />
          </Link>
        </Stack>
        <Typography sx={{ alignSelf: "flex-end" }} variant="h6">
          © 2024 Aya Ahmed
        </Typography>
      </Stack>

      <form
        action={sendEmail}
        style={{ display: "flex", flexDirection: "column", gap: "2.4rem" }}
      >
        <CustomTextField label="Name" name="name" />
        <CustomTextField type="email" label="Email" name="email" />
        <CustomTextField label="Subject" name="subject" />
        <CustomTextField label="Message" name="message" multiline={true} />
        <Button
          sx={{
            backgroundColor: "#61d5ff",
            color: "#0A0A0A",
            borderRadius: "10rem",
            width: "fit-content",
            paddingRight: "2.5rem",
            paddingLeft: "2.5rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            fontFamily: manrope.style.fontFamily,
            fontSize: "1.6rem",
            fontWeight: "700",
          }}
          type="submit"
        >
          SUBMIT
        </Button>
      </form>
    </Grid>
  );
};

export default LetsConnect;
