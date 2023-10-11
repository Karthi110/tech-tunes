import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <b> Tech Tunes Garage - </b> <br />
          For All Your Automotive Requirements
        </h1>

        <p className={styles.desc}>
          Tech Tunes Garage is redefining the way people look after their cars.
          We provide an advanced and simple way to book an auto repair and
          maintenance services with just a few clicks. Quality and reliability
          are the two most important pillars of products and services. We are
          passionate and believe that your vehicle deserves to be as healthy as
          you are.
          <span id={styles.extra}>
            Tech Tunes Garage helps in maximizing the lifespan of your car with
            quality services exceeding your expectations. We provide the most
            affordable and comprehensive car maintenance solutions that you can
            trust. We at Tech Tunes with over 10 years of experience are a
            well-known and trusted brand in the car moving industry
          </span>
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imgBg}>
              <Image
                alt=""
                src="/expert-mechanic.png"
                width={50}
                height={50}
                className={styles.img2}
              />
            </div>
            <div>
              <h1 className={styles.subTitle}>Expert Engineers</h1>
              <p className={styles.desc2}>
                Hire the best and certified engineers.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgBg}>
              <Image
                alt=""
                src="/gar.png"
                width={50}
                height={50}
                className={styles.img2}
              />
            </div>
            <div>
              <h1 className={styles.subTitle}>Modern Workshop</h1>
              <p className={styles.desc2}>
                Modern workshop having the right infrastructure.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgBg}>
              <Image
                alt=""
                src="/wallet.png"
                width={50}
                height={50}
                className={styles.img2}
              />
            </div>
            <div>
              <h1 className={styles.subTitle}>Cost Effective</h1>
              <p className={styles.desc2}>
                Get the best car services with affordable charges.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgBg}>
              <Image
                alt=""
                src="/customer-service.png"
                width={50}
                height={50}
                className={styles.img2}
              />
            </div>
            <div>
              <h1 className={styles.subTitle}>Creative Thinking</h1>
              <p className={styles.desc2}>
                Accurate dashboard tracker for service status.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/img2.jpg"
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default About;
