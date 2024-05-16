import React, { useState } from "react";
import { ButtonInfoSection } from "./buttonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styled/heroStyles";
import Videotest from "../public/video3.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [primary, setPrimary] = useState(false);
  const [dark, setDark] = useState(true);

  const onHover = () => {
    setHover(!hover);
    setPrimary(!primary);
    setDark(!dark);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Videotest} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome</HeroH1>
        <HeroP>This is a demonstration website</HeroP>
        <HeroBtnWrapper>
          <ButtonInfoSection
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            $primary={primary}
            $dark={dark}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonInfoSection>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
