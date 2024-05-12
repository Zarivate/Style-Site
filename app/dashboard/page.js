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
