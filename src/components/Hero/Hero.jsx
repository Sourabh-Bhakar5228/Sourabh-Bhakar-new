import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sourabh Bhakar</h1>
        <p className={styles.description}>
          Welcome to my portfolio! I am a passionate MERN stack developer with a solid foundation built during a 3-month internship in Hyderabad. My expertise spans across MongoDB, Express.js, React, and Node.js, enabling me to create full-stack web applications that are efficient, scalable, and user-friendly.
        </p>
        <a href="mailto:bhakarsoursbh@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sourabh4.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
