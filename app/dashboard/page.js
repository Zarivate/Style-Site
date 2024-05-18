"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { OutterWrap, Container } from "../signin/signinStyles";
import { BtnTextWrapper, TopText, DashWrap } from "./dashboardStyles";
import errorBg from "/public/backgroundless/pexelserror.jpg";
import InfoSections from "@/components/infoSections";
import { dashObjOne, dashObjTwo } from "@/components/infoData";
import Image from "next/image";
import { ButtonInfoSection } from "@/components/buttonElement";

const getToken = () => {
  const token = Cookies.get("token");
  return token;
};

const Dashboard = () => {
  const [session, setSession] = useState(false);
  const [neutral, setNeutral] = useState(true);

  useEffect(() => {
    setSession(getToken());
  }, []);

  // This still doesn't work so just forget it and go with the basics return ternary, remove the lase else
  // In order to prevent any hydration failures due to Nextjs pre rendering every page, which would cause an issue here due to rendering being dependant on whether the user
  // is signed in or not, a useEffect hook is used to set a session variable
  if (session && neutral) {
    return (
      <DashWrap>
        <InfoSections {...dashObjOne} />
        <InfoSections {...dashObjTwo} />
      </DashWrap>
    );
  } else if (neutral && !session) {
    return (
      <>
        <OutterWrap>
          <Image src={errorBg} alt="error Image" fill />
          <Container>
            <TopText>An account is needed to access this resource!</TopText>
            <BtnTextWrapper>
              <ButtonInfoSection as={Link} href="/signin" $err>
                Create account
              </ButtonInfoSection>
            </BtnTextWrapper>
          </Container>
        </OutterWrap>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Dashboard;
