import ArrowRight from "../assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center bg-black items-center gap-3 py-3 text-white text-sm ">
        <p className="text-white/60 hidden md:block">
          Stremline your work flow and boost your productivity
        </p>
        <div className="gap-1 inline-flex items-center">
          <p>Get started for free </p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} height={40} width={40} alt="logo" />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#">About </Link>
              <Link href="#">Features </Link>
              <Link href="#">Customers </Link>
              <Link href="#">Updates </Link>
              <Link href="#"> Help</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium items-center inline-flex justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
