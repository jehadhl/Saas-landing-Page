import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import X from "@/assets/social-x.svg";
import LinkedIn from "@/assets/social-linkedin.svg";
import Youtube from "@/assets/social-youtube.svg";
import Insta from "@/assets/social-insta.svg";
import Pin from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:blur before:content-[''] before:top-2 before:bottom-0 before:absolute  before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] ">
          <Image
            src={Logo}
            alt="imge_logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <Link href="#">About </Link>
          <Link href="#">Features </Link>
          <Link href="#">Customers </Link>
          <Link href="#">Updates </Link>
          <Link href="#"> Help</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <X />
          <Insta />
          <LinkedIn />
          <Pin />
          <Youtube />
        </div>
        <p className="mt-8">
          &copy; 2024 Your Company, Inc, All rights reserved.
        </p>
      </div>
    </footer>
  );
};
