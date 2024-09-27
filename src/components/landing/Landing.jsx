import './landing.scss'
import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import landing from "../../../public/assets/images/pictures/landing2.jpeg";

const Landing = () => {
  return (
    <div className="landing-container">
    <Image
      className="landing-image"
      src={landing}
      alt="landing-page image"
      layout="fill"
      objectFit="cover"
    />
    <div className="overlay"></div>
    <span className="text">
        <h1>Konza City</h1>
        <p>
        DISCOVER KONZA TECHNOPOLIS -A GLOBAL TECHNOLOGY AND INNOVATION HUB
      </p>
        <Button className='nav-contact-us'>Learn More</Button>
          </span>
  </div>
  )
}

export default Landing