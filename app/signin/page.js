"use client";
import React from "react";
import Image from "next/image";
import moongBg from "/public/moonphases.jpg";
import { createAccount } from "../actions/signUp";
import {
  OutterWrap,
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./signinStyles";

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
