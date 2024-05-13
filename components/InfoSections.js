import React from "react";
import styled from "styled-components";
import { ButtonInfoSection } from "./ButtonElement";
import { NavBtnLink } from "./Navbar";
import Image from "next/image";
import { logoutBtn } from "@/app/actions/signUp";

const InfoContainer = styled.div`
  color: #fff;
  background: ${({ $lightBg }) => ($lightBg ? "#fff" : "#010001")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ $imgStart }) =>
    $imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ $imgStart }) =>
      $imgStart
        ? `'col1' 'col2'`
        : `'col1 col1' 'col2 col2'`}; // Very important
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  background-image: url(${({ background }) => background});
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
  color: #7c7c7c;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ $lightText }) => ($lightText ? "#f7f8fa" : "#010606")};

  animation: glow 3s ease-in-out infinite alternate;

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 5px #020203, 0 0 5px #020203, 0 0 5px #bfbebe,
        0 0 5px #bfbebe, 0 0 5px #bfbebe, 0 0 15px #fff, 0 0 30px #fff;
    }

    to {
      text-shadow: 0 0 5px #020203, 0 0 5px #020203, 0 0 5px #fff,
        0 0 5px #bfbebe, 0 0 5px #bfbebe, 0 0 15px #fff, 0 0 30 px #fff;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ $darkText }) => ($darkText ? "#010606" : "#fff")};
`;

const BtnWrap = styled.div`
  display: flex;
  padding: 10px;
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled(Image)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  height: auto;
`;

const HomeA = styled.a`
  color: #b4b4b5;

  &:hover {
    color: #e8e8e5;
  }

  &:visited {
    color: grey;
    background-color: transparent;
  }
  animation: glow 3s ease-in-out infinite alternate;

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 5px #020203, 0 0 5px #010001, 0 0 5px #010001,
        0 0 5px #fff, 0 0 5px #fff, 0 0 15px #fff, 0 0 30px #fff;
    }

    to {
      text-shadow: 0 0 5px #020203, 0 0 5px #010001, 0 0 5px #010001,
        0 0 5px #fff, 0 0 5px #fff, 0 0 15px #fff, 0 0 30 px #fff;
    }
  }
`;

const LogoutBtn = styled.button`
  border-radius: 50px;
  background: #010001;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010001;
  }
`;

const Form = styled.form`
  display: flex;
  margin-left: 15px;
`;

const InfoSections = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  description2,
  buttonLabel,
  img,
  alt,
  to,
  dash,
  destination,
  hrefTo,
}) => {
  return (
    <>
      <InfoContainer id={id} $lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow $imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading $lightText={lightText}>{headline}</Heading>
                <Subtitle $darkText={darkText}>
                  {description}
                  {description2 ? (
                    <HomeA
                      href="https://github.com/Zarivate/Style-Site"
                      target="_blank"
                    >
                      {description2 + "."}
                    </HomeA>
                  ) : (
                    ""
                  )}
                </Subtitle>
                <BtnWrap>
                  {hrefTo ? (
                    <>
                      <NavBtnLink href={hrefTo}>Test It</NavBtnLink>
                    </>
                  ) : dash ? (
                    // Edit this section to link to fullstack site and then have second button as logout
                    <>
                      <ButtonInfoSection
                        // Change this so instead of scrolling, links to other site with href
                        to={to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                      >
                        {buttonLabel}
                      </ButtonInfoSection>
                      <Form action={logoutBtn}>
                        {/* Style this button in the vain of the others, regular button won't work because it's a link not a button so can't
                        do type="submit" on a link */}
                        <LogoutBtn type="submit">{dash}</LogoutBtn>
                      </Form>
                    </>
                  ) : (
                    <ButtonInfoSection
                      to={to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                    >
                      {buttonLabel}
                    </ButtonInfoSection>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} priority={true} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSections;
