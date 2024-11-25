import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialLogo,
  CustomA,
  WebsiteRights,
} from "./styled/footerStyles";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <FooterLink href="/">How it works</FooterLink>
              <FooterLink href="/">Testimonials</FooterLink>
              <FooterLink href="/">Careers</FooterLink>
              <FooterLink href="/">Investors</FooterLink>
              <FooterLink href="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink href="/">Customer Support</FooterLink>
              <FooterLink href="/">Email</FooterLink>
              <FooterLink href="/">P.O Box</FooterLink>
              <FooterLink href="/">Fax Machine</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Employees</FooterLinkTitle>
              <FooterLink href="/">Janitors</FooterLink>
              <FooterLink href="/">Ambassadors</FooterLink>
              <FooterLink href="/">Agency</FooterLink>
              <FooterLink href="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink href="/">Facebook</FooterLink>
              <FooterLink href="/">Instagram</FooterLink>
              <FooterLink href="/">Youtube</FooterLink>
              <FooterLink href="/">Twitter</FooterLink>
              <FooterLink href="/">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="/" onClick={toggleHome}>
              Demo
            </SocialLogo>
            <WebsiteRights>
              Demo © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <CustomA href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </CustomA>
              <CustomA href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </CustomA>
              <CustomA href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </CustomA>
              <CustomA href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </CustomA>
              <CustomA href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </CustomA>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
