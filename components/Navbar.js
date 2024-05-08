"use client";
import styled from "styled-components";
import Link from "next/link";
import { Link as LinkS } from "react-scroll";
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Nav = styled.nav`
  background: ${({ $scrollnav }) => ($scrollnav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  // As you scroll becomes active, causes highlight to appear underneath navbar once reach corresponding section of the page
  &.active {
    border-bottom: 3px solid #7c7c7c;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fafafb;
    color: black;
    font-weight: 500;
  }
`;

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
