import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image
        alt="Logo"
        src={"/MentorLagbe.png"}
        height={180}
        width={180}
        loading="eager"
        className="w-auto h-auto"
      />
    </>
  );
};

export default Logo;
