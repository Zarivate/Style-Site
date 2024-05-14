"use client";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import moongBg from "/public/backgroundless/moonphases.jpg";
import { createAccount } from "../actions/signUp";

export const BgSpace = styled.div`
  width: 100%;
  height: 100%;
  // This was a pain to figure out
  background-image: ${(props) => `url(${props.$bg.src})`};
  background-size: 100% 100%;
`;

export const OutterWrap = styled.div`
  position: relative;
  height: 100vh;
`;

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

const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Form = styled.form`
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

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 10px;
`;

const FormButton = styled.button`
  background-color: #fff;
  color: #010100;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
  transition: background 1s;
  &:hover {
    background-color: #010100;
    color: #fff;
  }
`;

const page = () => {
  return (
    <OutterWrap>
      <Image src={moongBg} alt="testimg" fill />
      <Container>
        <FormWrap>
          <Icon href="/">Demo</Icon>
          <FormContent>
            <Form action={createAccount}>
              <FormH1>Sign Up</FormH1>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormInput
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="Example@mail.com"
                required
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <FormButton type="submit">Sign Up</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </OutterWrap>
  );
};

export default page;
