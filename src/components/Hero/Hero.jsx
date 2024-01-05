import React from "react";

import Styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  React;
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I am Absra</h1>
        <p className={Styles.description}>
          I am a full stack-developer with a 5 years of experience using React
          and NodeJS. Reach out if you would like to Learn More!
        </p>
        <a href="mailto:absra12c@gmail.com" className={Styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of Me"
        className={Styles.heroImg}
      />
      <div className={Styles.topBlur}></div>
      <div className={Styles.bottomBlur} />
    </section>
  );
};
