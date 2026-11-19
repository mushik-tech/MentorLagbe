import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          alt="Logo"
          src={"/MentorLagbe.png"}
          height={180}
          width={180}
          loading="eager"
          className="w-auto h-auto"
        />
      </Link>
    </>
  );
};

export default Logo;
