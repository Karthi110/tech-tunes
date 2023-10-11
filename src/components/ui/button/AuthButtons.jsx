"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import styles from "./button.module.css";

const AuthButtons = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      {status !== "loading" && status === "unauthenticated" ? (
        <Link href="/login" className="popup" prefetch>
          Login
        </Link>
      ) : (
        <span href="/" className="popup" onClick={signOut}>
          Logout
        </span>
      )}
      <div className={styles.menu}>
        {open ? (
          <AiOutlineClose
            height={30}
            width={30}
            onClick={() => setOpen(!open)}
            className="burger"
          />
        ) : (
          <BiMenu
            height={30}
            width={30}
            onClick={() => setOpen(!open)}
            className="burger"
          />
        )}

        {open && (
          <div className={styles.responsiveMenu} onClick={() => setOpen(!open)}>
            <Link href="/" className={styles.l1}>
              Homepage
            </Link>
            <Link href="/about" className={styles.l1}>
              About
            </Link>
            <Link href="/contact" className={styles.l1}>
              Contact
            </Link>
            {status === "unauthenticated" ? (
              <Link href="/login" className={styles.l1}>
                Login
              </Link>
            ) : (
              <>
                <span onClick={signOut} className={styles.l1}>
                  Logout
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthButtons;
