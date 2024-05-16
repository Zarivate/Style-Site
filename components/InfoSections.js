import React from "react";
import { ButtonInfoSection } from "./buttonElement";
import { NavBtnLink } from "./styled/navStyles";
import { logoutBtn } from "@/app/actions/signUp";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  HomeA,
  Form,
} from "./styled/infoStyles";

const InfoSections = ({
  id,
  imgStart,
  topLine,
  headline,
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
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow $imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>
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
                    // Edit this section to link to fullstack site
                    <>
                      <ButtonInfoSection
                        as="a"
                        href={destination}
                        target="_blank"
                      >
                        {buttonLabel}
                      </ButtonInfoSection>
                      <Form action={logoutBtn}>
                        <ButtonInfoSection as="button" type="submit">
                          {dash}
                        </ButtonInfoSection>
                      </Form>
                    </>
                  ) : (
                    <>
                      <ButtonInfoSection
                        to={to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                      >
                        {buttonLabel}
                      </ButtonInfoSection>
                    </>
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
