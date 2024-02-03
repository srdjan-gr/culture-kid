"use client";
import { NavLinks } from "@/app/internalData";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../public/logo-cultured-kid.svg";
import { GrSearch } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className="max-w-full px-3 sm:px-0 sm:max-w-2xl md:max-w-5xl xl:max-w-7xl m-auto flex items-center justify-between py-8">
      <Link href={"./"}>
        <Image
          width={50}
          height={50}
          src={Logo}
          alt="cultured kid logo"
          className="w-full h-8 cursor-pointer"
        />
      </Link>
      <div className="flex items-center justify-center text-xs">
        <div className="flex gap-6 uppercase tracking-widest">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${
                  pathName === link.href ? "underline underline-offset-4" : ""
                } cursor-pointer hover:text-gray-500`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-5 ml-10 ">
          <GoSearch className="icon_size_md cursor-pointer hover:text-gray-500" />
          <BsCart2 className="icon_size_md cursor-pointer hover:text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
