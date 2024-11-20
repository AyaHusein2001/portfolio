import Button from "@mui/material/Button";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const AppBarButton: React.FC<{ item: string }> = ({ item }) => {
  return (
    <Button
      sx={{
        fontFamily: inter.style.fontFamily,
        fontWeight: "medium",
        fontSize: '1.6rem',
        color: "#C7C7C7",
      }}
    >
      {item}
    </Button>
  );
};

export default AppBarButton;
