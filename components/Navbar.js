"use client";
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./styled/navStyles";

const Navbar = ({ toggle }) => {
  const [scrollnav, setscrollnav] = useState(false);

  // If the screen passes 80 pixels the color of the Navbar changes, else it doesn't
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollnav(true);
    } else {
      setscrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // Function to make it so when they click on the Logo on the Navbar it takes them back to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#red" }}>
        <Nav $scrollnav={scrollnav}>
          <NavbarContainer>
            <NavLogo href="/" onClick={toggleHome}>
              Demo
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="more"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  More
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="details"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Details
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="test"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Test
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink href="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
