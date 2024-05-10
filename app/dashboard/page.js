"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { logoutBtn } from "../actions/signUp";

import testBg from "/public/backgroundless/pexelsstarsnight.jpg";

const Container = styled.div`
  min-height: 500px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #fff;
`;

const BgSpace = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${testBg.src});
  background-size: 100% 100%;
  -o-object-fit: cover;
  object-fit: cover;
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
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 5em;
  background: transparent;
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
        <Container>
          <BgSpace $bg={testBg}>
            <Wrapper>
              <Title>Welcome to the "secret" page.</Title>
              <Text>
                This page is only accessible if you've created an account. The
                process is done by creating a cookie{" "}
              </Text>
              <form action={logoutBtn}>
                <Text>
                  What the button below will do is delete the cookie and
                  redirect you to the main page via server actions.
                </Text>
                <button type="submit">Logout</button>
              </form>

              <Text>Nothing too complex </Text>
            </Wrapper>
          </BgSpace>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <BgSpace $bg={testBg}>
          <h1>You need to create an account first!</h1>
          <Link href="/signin">Create your account</Link>
        </BgSpace>
      </Container>
    </>
  );
};

export default Dashboard;
