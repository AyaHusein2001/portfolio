import Link from "next/link";
import React from "react";

const InlineLink: React.FC<{ link: string; text: string }> = ({
  link,
  text,
}) => {
  return (
    <Link
      style={{
        color: "#fff", 
        borderBottom: "1px solid #D3E97A", 
      }}
      href={link}
    >
      {text}
    </Link>
  );
};

export default InlineLink;
