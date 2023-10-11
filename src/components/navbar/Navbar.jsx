import React from "react";
import Link from "next/link";
import AuthButtons from "../ui/button/AuthButtons";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <header>
      <h2 className="logo">Tech Tunes</h2>

      <nav className="navigation">
        <Link className="nav" href="/" prefetch>
          Home
        </Link>
        <Link className="nav" href="/about" prefetch>
          About-us
        </Link>
        <Link className="nav" href="/contact" prefetch>
          Contact
        </Link>
        <AuthButtons />
        <a id="call" className="nav" style={{ cursor: "pointer" }}>
          Call us: 099802 21122
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
