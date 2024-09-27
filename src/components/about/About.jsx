import React from "react";
import "./about.scss";
import Image from "next/image";

import AboutImage from "../../../public/assets/images/pictures/about.webp";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <Image
          className="about-image"
          src={AboutImage}
          alt="landing-page"
          height={800}
          width={800}
        />
      </div>
      <div className="about-text">
        <p>
          Konza (Konza Technopolis ) is a key flagship project of Kenya’s Vision
          2030 economic development portfolio. Konza will be a world-class city,
          powered by a thriving information, communications and technology (ICT)
          sector, superior reliable infrastructure and business friendly
          governance systems.
        </p>
      </div>
    </div>
  );
};

export default About;
