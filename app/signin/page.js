"use client";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import moongBg from "/public/backgroundless/moonphases.jpg";

const BgSpace = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${moongBg.src});
  background-size: 100% 100%;
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

  animation: glow 3s ease-in-out infinite alternate;

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 5px #020203, 0 0 5px #020203, 0 0 5px #bfbebe,
        0 0 5px #bfbebe, 0 0 5px #bfbebe, 0 0 15px #fff, 0 0 30px #fff;
      box-shadow: 1px 2px 22px rgb(238, 238, 228);
    }

    to {
      text-shadow: 0 0 5px #020203, 0 0 5px #020203, 0 0 5px #fff,
        0 0 5px #bfbebe, 0 0 5px #bfbebe, 0 0 15px #fff, 0 0 30 px #fff;
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
  border-radius: 4px;
`;

const FormButton = styled.button`
  background-color: #fff;
  color: #010100;
  padding: 10px 0;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  flex-basis: 48%;

  &:hover {
    background-color: #010100;
    color: #fff;
  }
`;

const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

const BtnField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BtnFieldButton = styled.button`
  flex-basis: 48%;
  background: #fff;
  color: black;
  height: 40px;
  border-radius: 20px;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: background 1s;
`;

const page = () => {
  return (
    <>
      <Container>
        <BgSpace $moonBg={moongBg}>
          <FormWrap>
            <Icon href="/">Demo</Icon>
            <FormContent>
              <Form action="#">
                <FormH1>Sign In</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <BtnField>
                  <FormButton type="submit">Sign In</FormButton>
                  <FormButton type="submit">Sign Up</FormButton>
                </BtnField>

                <Text>
                  Forgot password? <a href="/">Reset Here</a>
                </Text>
              </Form>
            </FormContent>
          </FormWrap>
        </BgSpace>
      </Container>
    </>
  );
};

export default page;
