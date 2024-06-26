import styled from "styled-components";
import Image from "next/image";

export const InfoContainer = styled.div`
  color: #fff;
  background: #010001;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: ${({ $dashScreen }) => ($dashScreen ? "100vh" : "860px")};
  width: ${({ $dashScreen }) => ($dashScreen ? "100vw" : "100%")};
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
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

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  background-image: url(${({ background }) => background});
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #7c7c7c;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  background: #010001;
  text-shadow: 0 0 4px #fff, 0 0 4px #494949;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const BtnWrap = styled.div`
  display: flex;
  padding: 10px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled(Image)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  height: auto;
`;

export const HomeA = styled.a`
  color: #fff;
  text-shadow: 0 0 4px #fff, 0 0 4px #494949;

  &:hover {
    color: black;
  }
  s &:visited {
    color: #d9dbdd;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-left: 15px;
`;
