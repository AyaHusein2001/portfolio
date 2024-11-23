import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";
import skills from "@/data/skills";
import Skill from "./Skill";

const SkillsSection = () => {
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
        <Grid sx={{ alignSelf: "flex-start" }}>
          <Typography variant="h1">My Capabilities</Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            width: "57.6rem",
          }}
        >
          <Typography variant="h6">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, lg: 3 }}
            columns={{ xs: 4, lg: 12 }}
          >
            {skills.map((skill) => (
              <Skill key={skill} text={skill} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SkillsSection;
