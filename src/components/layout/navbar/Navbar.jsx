"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import "./navbar.scss";
import phone from "../../../../public/assets/images/logo/phone.png";
import email from "../../../../public/assets/images/logo/email.png";
import instagram from "../../../../public/assets/images/logo/instagram.svg";
import tiktok from "../../../../public/assets/images/logo/tiktok.svg";
import { Button } from "@/components/ui/button";
import logo from "../../../../public/assets/images/logo/logo.png";
import menu from "../../../../public/assets/images/logo/menu.svg";
import close from "../../../../public/assets/images/logo/close.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="main-navbar">
        <ul className="main-navbar-list">
          <li>
            <Image
              className="main-logo"
              src={logo}
              height={30}
              width={30}
              alt="ultraclean-logo"
            />
          </li>
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              href="#"
              offset={-70}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              href="#"
              offset={-70}
              duration={500}
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              href="#"
              offset={-100}
              duration={500}
            >
              Discover konza
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="pricing"
              spy={true}
              smooth={true}
              href="#"
              offset={-100}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="gallery"
              spy={true}
              smooth={true}
              href="#"
              offset={-100}
              duration={500}
            >
              Resource Center
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="faq"
              spy={true}
              smooth={true}
              href="#"
              offset={-100}
              duration={500}
            >
              Contact Us
            </ScrollLink>
          </li>
            <li>
              <Link href="/about">
                <Button>IASAP 2024 NAIROBI</Button>
              </Link>
            </li>
        </ul>

        <div className="mobile-menu">
          <div className="mobile-navbar">
            <Image
              className="main-logo"
              src={logo}
              height={90}
              width={180}
              alt="ultraclean-logo"
            />
            <Image
              src={isMobileMenuOpen ? close : menu}
              height={45}
              width={25}
              className="menu-logo"
              alt={isMobileMenuOpen ? "close" : "menu"}
              onClick={toggleMobileMenu}
            />
          </div>
          {isMobileMenuOpen && (
            <ul className="mobile-menu-items">
              <li>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  href="#"
                  offset={-140}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  href="#"
                  offset={-140}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  href="#"
                  offset={-140}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="pricing"
                  spy={true}
                  smooth={true}
                  href="#"
                  offset={-140}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  spy={true}
                  smooth={true}
                  href="#"
                  offset={-140}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="faq"
                  spy={true}
                  smooth={true}
                  href="#"
                  offset={-140}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  FAQ
                </ScrollLink>
              </li>
              <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              href="#"
              offset={-100}
              duration={500}
              onClick={closeMobileMenu}
            >
              Contact
            </ScrollLink>
          </li>
              <li>
                <Link href="/about">
                  <Button>Sourcing Laundry Machines</Button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
