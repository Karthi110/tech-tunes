import React from "react";
import styles from "./appoint.module.css";
import Image from "next/image";
import Button from "../ui/button/Button";

const Appointment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          alt=""
          src="/appointment.png"
          width={400}
          height={400}
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Schedule Your Appointment Today <br />
          <span className={styles.call}>Call : 099802 21122</span>
        </h1>
        <p className={styles.desc}>
          Repair Services That Come With Our Commitment to Quality.
        </p>
        <Button text="Book an Appointment" url="booking" />
      </div>
    </div>
  );
};

export default Appointment;
