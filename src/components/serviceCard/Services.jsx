import React from "react";
import sty from "./services.module.css";
import Image from "next/image";

const Services = () => {
  return (
    <div className={sty.container}>
      <div className={sty.textContainer}>
        <h1 className={sty.title}>
          Car repairs and <span className={sty.clr}>Services</span>
        </h1>
      </div>
      <div className={sty.service}>
        <div className={sty.serviceCard}>
          <div className={sty.imgContainer}>
            <Image
              src="/1.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Periodic Services.</h3>
        </div>
        <div className={sty.serviceCard} id={sty.ext}>
          <div className={sty.imgContainer}>
            <Image
              src="/2.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Denting And Painting </h3>
        </div>
        <div className={sty.serviceCard}>
          <div className={sty.imgContainer}>
            <Image
              src="/3.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Batteries </h3>
        </div>
        <div className={sty.serviceCard} id={sty.ext}>
          <div className={sty.imgContainer}>
            <Image
              src="/4.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Car Spa And Cleaning </h3>
        </div>
        <div className={sty.serviceCard} id={sty.extra}>
          <div className={sty.imgContainer}>
            <Image
              src="/5.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>AC Service And Repair </h3>
        </div>
        <div className={sty.serviceCard}>
          <div className={sty.imgContainer}>
            <Image
              src="/6.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Tyres And Wheels </h3>
        </div>
        <div className={sty.serviceCard} id={sty.extra}>
          <div className={sty.imgContainer}>
            <Image
              src="/7.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Accidental Car Repair </h3>
        </div>
        <div className={sty.serviceCard} id={sty.extra}>
          <div className={sty.imgContainer}>
            <Image
              src="/8.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Detailing Services </h3>
        </div>
        <div className={sty.serviceCard} id={sty.extra}>
          <div className={sty.imgContainer}>
            <Image
              src="/9.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Custom Services </h3>
        </div>
        <div className={sty.serviceCard} id={sty.extra}>
          <div className={sty.imgContainer}>
            <Image
              src="/10.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Windshield And Glass </h3>
        </div>
        <div className={sty.serviceCard} id={sty.extra}>
          <div className={sty.imgContainer}>
            <Image
              src="/11.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Lights And Fitments </h3>
        </div>
        <div className={sty.serviceCard} id={sty.extra}>
          <div className={sty.imgContainer}>
            <Image
              src="/12.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>Engine Decarbonization </h3>
        </div>
        <div className={sty.serviceCard}>
          <div className={sty.imgContainer}>
            <Image
              src="/13.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>CarWash </h3>
        </div>
        <div className={sty.serviceCard} id={sty.more}>
          <div className={sty.imgContainer}>
            <Image
              src="/more.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={sty.img}
            />
          </div>
          <h3 className={sty.subTitle}>And Much More </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
