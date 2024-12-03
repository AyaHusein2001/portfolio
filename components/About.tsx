import Grid from "@mui/material/Grid2";
import CustomLink from "./CustomLink";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <Grid
      id="about"
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
        sx={{ display: { xs: "none", lg: "flex" }, alignSelf: "flex-start" }}
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
        <Grid sx={{ display: { xs: "none", lg: "flex" } }}>
          <Typography variant="h2">
            I am a full-stack developer . Has Computer
            Engineering Bachelor degree.
          </Typography>
        </Grid>

        <Grid sx={{ paddingLeft: { xs: "3.4rem", lg: "0" } }}>
          <Typography variant="h6">
            I am a full-stack developer with a foundation
            in engineering and web development. I specialize in building
            responsive, user-friendly applications using modern technologies
            like React.js,Next.js, Flask, and Tailwind CSS. Passionate about solving
            complex problems, I enjoy crafting innovative solutions that
            integrate functionality with design. Currently, I’m honing my skills
            in web development and exploring advanced frameworks.
            When I’m not coding, you’ll find me Reading,
            , or diving into the latest tech trends. Always
            eager to learn and grow!
          </Typography>
        </Grid>

        <Grid sx={{ paddingLeft: { xs: "3.4rem", lg: "0" } }}>
          <CustomLink link="/about" children={<>More About Me</>} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
