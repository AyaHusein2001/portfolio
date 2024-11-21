import { Box, IconButton, Link, Stack } from "@mui/material";
import CustomTitle from "@/components/CustomTitle";
import Grid from "@mui/material/Grid2";
import CustomDescription from "@/components/CustomDescription";
import CustomContainedButton from "@/components/CustomContainedButton";
import CustomHeader from "@/components/CustomHeader";

const AboutPage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "space-between",
        padding: { xs: "6.4rem", lg: "10.8rem" },
        paddingTop: { xs: "4rem", lg: "12.2rem" },
        alignItems: "center",

        gap: { xs: "4rem", lg: "1rem" },
      }}
    >
      <Grid
        sx={{paddingLeft: { xs: "6.4rem" } , alignSelf: "flex-start" }}
      >
        <CustomTitle title="ABOUT ME" color="#ffffff" size={10.1} />
      </Grid>
      <Grid spacing={3}>
        <Grid sx={{paddingLeft: { xs: "6.4rem" }}} >
          <CustomHeader
            title="I am a front-end developer based in Sydney. Has Mechanical Engineering background. "
            color="#ffffff"
            size={3.2}
            weight={500}
            paddingBottom={1.6}
            width={57.6}
            xsWidth={34.3}
          />
        </Grid>
        <Grid sx={{paddingLeft: { xs: "6.4rem" }}} >
          <CustomDescription
            description="I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill."
            color="#C7C7C7"
            size={1.6}
            width={57.6}
            xsWidth={34.3}

          />
        </Grid>
        <Grid sx={{paddingLeft: { xs: "6.4rem" }}}>
          <Link
            fontWeight={700}
            sx={{
              borderColor: "#D3E97A",
              borderBottom: "2px solid",
             
              paddingTop: "3rem",
              display: "flex",
              paddingBottom:'0.4rem',
              alignItems: "center",
              width: "fit-content"
            }}
            fontSize={16}
            color="#D3E97A"
            href="#"
            underline="none"

          >
            MORE ABOUT ME
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
