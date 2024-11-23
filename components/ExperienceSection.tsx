import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";
import experience from "@/data/experience";
import Skill from "./Skill";

const ExperienceSection = () => {
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
          <Typography variant="h1">My Experience</Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            width: "57.6rem",
          }}
        >
          {experience.map((exp) => (
            <>
              <Grid
                container
                alignItems={'center'}
               
                spacing={{ xs: 2, lg: 20 }}
                columns={{ xs: 1, lg: 2 }}
              >
                <Typography variant="h2">{exp.role}</Typography>
                <Typography variant="h6">{exp.date}</Typography>
              </Grid>
              <Typography color='#D3E97A' variant="h6">{exp.company}</Typography>
              <Typography variant="h6">{exp.description}</Typography>
            </>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ExperienceSection;
