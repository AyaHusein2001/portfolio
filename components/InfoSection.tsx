import Grid from "@mui/material/Grid2";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import CustomContainedButton from "@/components/CustomContainedButton";
import { FaCircle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { MdDownloadForOffline } from "react-icons/md";
import Link from "next/link";
import accounts from "@/data/accounts";

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
        <Grid sx={{ alignSelf: "flex-start" }}>
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
              I am a full-stack developer . Has Computer Engineering Bachelor
              degree.
            </Typography>
          </Grid>

          <Grid>
            <Typography variant="h6">
              I am a full-stack developer with a foundation in engineering and
              web development. I specialize in building responsive,
              user-friendly applications using modern technologies like
              React.js,Next.js, Flask, and Tailwind CSS. Passionate about
              solving complex problems, I enjoy crafting innovative solutions
              that integrate functionality with design. Currently, I’m honing my
              skills in web development and exploring advanced frameworks. When
              I’m not coding, you’ll find me Reading, , or diving into the
              latest tech trends. Always eager to learn and grow!
            </Typography>
          </Grid>

          <Stack direction="row" alignItems='center' sx={{ gap: "1rem" }}>
            <CustomContainedButton
              link="https://drive.google.com/uc?export=view&id=1zhBOaNcBLopSxqtRfmj2moO2mMlWRyzH"
              xsIcon={
                <MdDownloadForOffline
                  style={{ marginLeft: "2rem" }}
                  size={35}
                />
              }
              lgIcon={<FaCircle style={{ marginLeft: "2rem" }} size={10} />}
              text="Download Resume"
            />
            <Link href={accounts.linkedin}>
              <IconButton aria-label="linkedin">
                <FaLinkedinIn color="#61d5ff" />
              </IconButton>
            </Link>
            <Link href={accounts.github}>
              <IconButton aria-label="github">
                <FaGithub color="#61d5ff" />
              </IconButton>
            </Link>
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
