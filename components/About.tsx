
import Grid from "@mui/material/Grid2";
import CustomLink from "./CustomLink";
import { Typography } from "@mui/material";

const About = () => {
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
          width: '57.6rem',
        }}
      >
        <Grid sx={{ display: { xs: "none", lg: "flex" } }}>
          <Typography variant="h2" >
          I am a front-end developer based in Sydney. Has Mechanical Engineering background. 
  
          </Typography>
          
        </Grid>

        <Grid sx={{ paddingLeft: { xs: "3.4rem", lg: "0" } }}>
          <Typography variant="h6">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
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
