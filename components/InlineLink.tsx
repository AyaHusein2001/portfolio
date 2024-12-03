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
        borderBottom: "1px solid #61d5ff", 
      }}
      href={link}
    >
      {text}
    </Link>
  );
};

export default InlineLink;
