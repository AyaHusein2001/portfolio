import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Manrope } from "next/font/google";
import Grid from "@mui/material/Grid2";
import { FaLinkedinIn } from "react-icons/fa";
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
        <Grid>
          <Typography sx={{ alignSelf: "flex-end" }} variant="h6">
            © 2024 Aya Ahmed
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ height: "100%" }} columns={{ xs: 6, lg: 12 }}>
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
              "&:hover": {
                backgroundColor: "#387e97",
                color: "#fff",
              },
            }}
            type="submit"
          >
            SUBMIT
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default LetsConnect;
