import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto w-full flex justify-between h-24 items-center">
      <Link href="/">ChrisHogan.io</Link>
      <div className="flex gap-3">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
