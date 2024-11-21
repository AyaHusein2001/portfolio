import { Box, IconButton, Link, Stack, TextField } from "@mui/material";
import CustomTitle from "./CustomTitle";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomDescription from "./CustomDescription";
import CustomContainedButton from "./CustomContainedButton";
import CustomHeader from "./CustomHeader";
import { FaXTwitter } from "react-icons/fa6";
import CustomTextField from "./CustomTextField";

const LetsConnect = () => {
  return (
    <Grid
      container
      sx={{
        // justifyContent: "space-between",
        padding: { xs: "6.4rem", lg: "10.8rem" },
        paddingTop: { xs: "4rem", lg: "12.2rem" },
        alignItems: "center",

        gap: { xs: "4rem", lg: "1rem" },
      }}
    >
      <Grid sx={{ alignSelf: "flex-start" }}>
        <Grid>
          <CustomTitle title="LET'S CONNECT" color="#ffffff" size={10.1} />
        </Grid>
        <Grid>
          <CustomDescription
            description="say hello at aya.ahmed2001.aa@gmail.com"
            color="#C7C7C7"
            size={1.6}
            width={57.6}
            xsWidth={34.3}
          />
        </Grid>

        <Grid>
          <CustomDescription
            description="For more Info , here is my resume"
            color="#C7C7C7"
            size={1.6}
            width={57.6}
            xsWidth={34.3}
          />
        </Grid>

        <Grid sx={{ paddingTop: "4rem" }}>
          <Stack direction="row" sx={{ gap: "2.4rem" }}>
            <FaGithub size={32} color="#D3E97A" />
            <FaLinkedinIn size={32} color="#D3E97A" />
            <FaXTwitter size={32} color="#D3E97A" />
            <FaInstagram size={32} color="#D3E97A" />
          </Stack>
        </Grid>
      </Grid>

      <Grid>
        <Grid sx={{ paddingLeft: { xs: "6.4rem" } }}>
          <CustomTextField label="Name" multiline={false} />
        </Grid>
        <Grid sx={{ paddingLeft: { xs: "6.4rem" } }}>
          <CustomTextField label="Email" multiline={false} />
        </Grid>
        <Grid sx={{ paddingLeft: { xs: "6.4rem" } }}>
          <CustomTextField label="Subject" multiline={false} />
        </Grid>

        <Grid sx={{ paddingLeft: { xs: "6.4rem" } }}>
          <CustomTextField label="Message" multiline={true} />
        </Grid>
        <Grid sx={{ paddingLeft: { xs: "6.4rem" } }}>
          <CustomContainedButton />
        </Grid>
      </Grid>

      <Grid sx={{ justifySelf: "flex-end" }}>
        <CustomDescription
          description="© 2023 Robert Garcia"
          color="#C7C7C7"
          size={1.6}
          width={57.6}
          xsWidth={34.3}
        />
      </Grid>
    </Grid>
  );
};

export default LetsConnect;
