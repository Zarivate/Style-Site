"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { logoutBtn } from "../actions/signUp";
import { BgSpace } from "../signin/page";
import errorBg from "/public/backgroundless/pexelserror.jpg";
import InfoSections from "@/components/InfoSections";
import { dashObjOne, dashObjTwo } from "@/components/InfoData";

const Container = styled.div`
  min-height: 500px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

const Text = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const FormContainer = styled.form`
  background: #010100;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 25px;

  animation: glow 3s ease-in-out infinite;

  @-webkit-keyframes glow {
    from {
      box-shadow: 1px 2px 22px rgb(238, 238, 228);
    }

    to {
      box-shadow: 1px 2px 22px rgb(238, 238, 228);
    }
  }

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

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
  justify-content: flex-start;
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

const getToken = () => {
  const token = Cookies.get("token");

  return token;
};

const Dashboard = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(getToken());
  }, []);

  // In order to prevent any hydration failures due to Nextjs pre rendering every page, which would cause an issue here due to rendering being dependant on whether the user
  // is signed in or not, a useEffect hook is used to set a session variable
  if (session) {
    return (
      <>
        <InfoSections {...dashObjOne} />
        <form action={logoutBtn}>
          <button type="submit">logout</button>
        </form>
        <InfoSections {...dashObjTwo} />
      </>
    );
  }
  return (
    <>
      <Container>
        <BgSpace $bg={errorBg}>
          <h1>You need to create an account first!</h1>
          <Link href="/signin">Create your account</Link>
        </BgSpace>
      </Container>
    </>
  );
};

export default Dashboard;
