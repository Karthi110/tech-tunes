import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>Tech Tunes</h1>
          </div>
          <p className={styles.desc} id={styles.desc}>
            Ready to book your car repair and maintenance service with Tech
            Tunes Garage? If yes, then get ready to experience the quality car
            repair solutions at affordable prices. We are just one click away if
            you are looking for excellence in car servicing and maintenance.
          </p>
          <div className={styles.icons}>
            <Image
              src="/facebook.png"
              alt="social"
              width={18}
              height={18}
              className={styles.icon}
            />
            <Image
              src="/instagram.png"
              alt="social"
              width={18}
              height={18}
              className={styles.icon}
            />
            <Image
              src="/youtube.png"
              alt="social"
              width={18}
              height={18}
              className={styles.icon}
            />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link className={styles.desc} href="/">
              Homepage
            </Link>
            <Link className={styles.desc} href="/about">
              About-us
            </Link>
            <Link className={styles.desc} href="/contact">
              Contact
            </Link>
          </div>
          <div className={styles.services} id={styles.grid}>
            <div className={styles.grid}>
              <span className={styles.listTitle}>Tags</span>
              <Link className={styles.desc} href="/">
                Periodic Services
              </Link>

              <Link className={styles.desc} href="/">
                Batteries
              </Link>

              <Link className={styles.desc} href="/">
                Tyres And Wheels
              </Link>

              <Link className={styles.desc} href="/">
                Detailing Services
              </Link>
              <Link className={styles.desc} href="/">
                Custom Services
              </Link>

              <Link className={styles.desc} href="/">
                CarWash
              </Link>
            </div>
          </div>
          <div className={styles.address}>
            <span className={styles.listTitle}>Quick Contact</span>
            <p className={styles.desc}> 099802 21122</p>
            <p className={styles.desc}> help@techtunes.in</p>
            <p className={styles.desc}>
              #161,5th phase, Sachidananda Nagar, <br />
              Rajarajeshwari Nagar,
              <br />
              Bengaluru, Karnataka 560098.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.end}>
        <h1 className={styles.endTitle}>
          ©2023 Tech Tunes. All rights reserved.
        </h1>
        <p className={styles.endDesc}>
          Disclaimer - The information, services, and products, accessed through
          this website own is owned and operated by Tech Tunes Garage. The
          representatives of the company are liable to make any changes to the
          data and can make additional changes to the website wherever required.
          Our company’s representative disclaims any information and services
          provided on our website and are subject to the law of infringement.
        </p>
      </div>
    </>
  );
};

export default Footer;
