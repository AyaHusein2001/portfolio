import Grid from "@mui/material/Grid2";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import CustomContainedButton from "@/components/CustomContainedButton";
import { FaCircle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Info = () => {
  return (
    <Stack>
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
        <Grid
          sx={{  alignSelf: "flex-start" }}
        >
          <Typography variant="h1">About Me</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            width: "57.6rem",
          }}
        >
          <Grid>
            <Typography variant="h2">
              I am a front-end developer based in Sydney. Has Mechanical
              Engineering background.
            </Typography>
          </Grid>

          <Grid >
            <Typography variant="h6">
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </Typography>
          </Grid>

          <Stack direction="row" sx={{ gap: "1rem" }}>
            <CustomContainedButton
              icon={<FaCircle size={10} />}
              text="Download Resume"
            />
            <IconButton aria-label="linkedin">
              <FaLinkedinIn color="#D3E97A" />
            </IconButton>
            <IconButton aria-label="linkedin">
              <FaGithub color="#D3E97A" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Box
      sx={{
        alignSelf: "center",
        width: { xs: "40rem", lg: "80rem" },
        height: { xs: "30rem", lg: "60rem" },
        position: "relative", 
      }}
    >
      <Image
        src="https://drive.google.com/uc?export=view&id=19fr4K76DKeK-l94_nHrQoQZOZgBc1Kq4"
        alt="aya"
        layout="fill" 
        objectFit="cover"
        style={{ borderRadius: "2rem" }}
      />
    </Box>
    </Stack>
  );
};

export default Info;
