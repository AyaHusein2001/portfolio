import Link from "next/link";
import React, { ReactNode } from "react";

const CustomLink: React.FC<{ children: ReactNode; link: string }> = ({
  children,
  link,
}) => {
  return (
    <Link
      style={{
        borderColor: "#61d5ff",
        borderBottom: "2px solid",
        paddingBottom: "4px",
        display: "flex",
        alignItems: "center",
        fontWeight: "700",
        fontSize: "1.6rem",
        color:"#61d5ff",
        width: "fit-content",
      }}
      href={link}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
