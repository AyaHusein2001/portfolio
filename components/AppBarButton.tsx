import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const AppBarButton: React.FC<{ item: string,link:string }> = ({ item,link }) => {
  return (
    <Link
    href={link}
      style={{
        fontFamily: inter.style.fontFamily,
        fontWeight: "medium",
        fontSize: '1.6rem',
        color: "#C7C7C7",
      }}
     
    >
      {item}
    </Link>
  );
};

export default AppBarButton;
