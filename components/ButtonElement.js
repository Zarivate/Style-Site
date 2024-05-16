import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const ButtonInfoSection = styled(LinkS)`
  border-radius: 50px;
  background: ${({ $err }) => ($err ? `black` : "inherit")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  width: ${({ $err }) => ($err ? "fit-content" : "")};
  margin: ${({ $err }) => ($err ? "auto" : "")};
  text-decoration: ${({ $err }) => ($err ? "none" : "")};
  margin-top: ${({ $err }) => ($err ? "10px" : "")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;
