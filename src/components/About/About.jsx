import React from "react";

import Styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  React;
  Styles;
  getImageUrl;
  return (
    <section className={Styles.container} id="about">
      <h2 className={Styles.title}>About</h2>
      <div className={Styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me siting with a laptop"
          className={Styles.aboutImage}
        />

        <div>
          <ul className={Styles.aboutItems}>
            <li className={Styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="Cursor Icon"
              />
              <div className={Styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I am a Frontend developer with experience in building
                  responsive and optimized sites.
                </p>
              </div>
            </li>
            <li className={Styles.aboutItem}>
              <img
                src={getImageUrl("about/serverIcon.png")}
                alt="Server Icon"
              />
              <div className={Styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimized Backend
                  systems and APIs
                </p>
              </div>
            </li>
            <li className={Styles.aboutItem}>
              <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
              <div className={Styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
