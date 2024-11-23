import Link from "next/link";
import React, { ReactNode } from "react";

const CustomLink: React.FC<{ children: ReactNode; link: string }> = ({
  children,
  link,
}) => {
  return (
    <Link
      style={{
        borderColor: "#D3E97A",
        borderBottom: "2px solid",
        paddingBottom: "4px",
        display: "flex",
        alignItems: "center",
        fontWeight: "700",
        fontSize: "1.6rem",
        color:"#D3E97A",
        width: "fit-content",
      }}
      href={link}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
