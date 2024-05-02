import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Icon1 from "/public/pexelsOriginal2.jpg";
import Icon2 from "/public/pexelsOriginal3.jpg";
import Icon3 from "/public/pexelsOriginal5.jpg";

const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ServicesIcon = styled(Image)`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Incididunt velit</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt="test1" />
          <ServicesH2>Occaecat nulla</ServicesH2>
          <ServicesP>
            Proident amet reprehenderit deserunt proident id.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt="test2" />
          <ServicesH2>Labore ad sint tempor</ServicesH2>
          <ServicesP>Pariatur Lorem exercitation aliquip culpa.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="test3" />
          <ServicesH2>Laborum nostrud tempor</ServicesH2>
          <ServicesP>Anim velit consequat cupidatat consequat.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
