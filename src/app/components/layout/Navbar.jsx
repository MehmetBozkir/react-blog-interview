"use client";
import Link from "next/link";
import { BsFilterRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

const links = [
  { url: "/products", title: "Products" },
  { url: "/solutions", title: "Solutions" },
  { url: "/pricing", title: "Pricing" },
  { url: "/resources", title: "Resources" },
  { url: "/login", title: "Log In" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="h-auto md:h-24 w-full max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 font-medium text-amber-900 max-md:bg-white">
      <div>
        <Link href="/">
          <span className="font-bold text-3xl text-secondary leading-[35.2px]">
            Collers
          </span>
        </Link>
      </div>

      {!isMobile && (
        <div className="flex gap-8 items-center">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className="hover:text-amber-700 "
            >
              {link.title}
            </Link>
          ))}
          <Link href="/signup">
            <button className=" border-amber-900 px-6 py-2 border-2 rounded-lg hover:bg-amber-900 hover:text-white">
              Sign up now
            </button>
          </Link>
        </div>
      )}

      {isMobile && (
        <div className="ml-auto">
          <button
            onClick={toggleMenu}
            className="text-amber-900 text-2xl p-2 rounded-full transition-colors"
          >
            {open ? (
              <IoMdClose />
            ) : (
              <BsFilterRight className="transition-colors transform scale-y-[-1]" />
            )}
          </button>
        </div>
      )}

      {isMobile && open && (
        <div className="absolute top-0 left-0 w-full h-screen bg-amber-900 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <IoMdClose />
          </button>
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className="hover:text-amber-700"
            >
              {link.title}
            </Link>
          ))}
          <Link href="/signup">
            <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
              Sign up now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
