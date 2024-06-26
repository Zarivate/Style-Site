import styled from "styled-components";
import Link from "next/link";

export const OutterWrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  min-height: 500px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
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

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
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

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 10px;
`;

export const FormButton = styled.button`
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
