import image1 from "../public/backgroundless/file2.png";
import image2 from "../public/backgroundless/file3.png";
import image3 from "../public/backgroundless/file45.png";
import image4 from "/public/backgroundless/file6.png";

export const homeObjOne = {
  id: "about",
  lightText: true,
  lightTextDesc: true,
  topLine: "About This Site",
  headline: "A simple showcase",
  description:
    "Made to demonstrate my abilites in building sites from the ground up. NextJS 14 was used alongside styled components to create a fully responsive site.",
  buttonLabel: "Continue",
  imgStart: false,
  img: image1,
  alt: "fullMoon",
  darkText: false,
  to: "more",
};

export const homeObjTwo = {
  id: "more",
  lightText: true,
  lightTextDesc: true,
  topLine: "Responsive",
  headline: "This site has been optimized for mobile users as well.",
  description:
    "Go ahead and modify the size of this window. A collapsable hamburger menu will replace the navbar once the screen reaches a certain size.",
  buttonLabel: "Continue",
  imgStart: true,
  img: image2,
  alt: "waningGibbous",
  darkText: false,
  to: "details",
};

export const homeObjThree = {
  id: "details",
  lightText: true,
  lightTextDesc: true,
  topLine: "Source Code",
  headline: "Found at my Github",
  description:
    "Alongside the code for my other projects, the code for this project can be found ",
  description2: "here",
  buttonLabel: "Continue",
  imgStart: false,
  img: image3,
  alt: "lastquarter",
  darkText: false,
  to: "test",
};

export const homeObjFour = {
  id: "test",
  lightText: true,
  lightTextDesc: true,
  topLine: "Want to Test?",
  headline: "Functionality demonstration",
  description:
    "If you follow the button below you'll be redirected to a Sign Up/Log In page. Once signe up, you'll receive a confirmation email in your inbox with details about how the session works and links to more advanced sites I've made.",
  buttonLabel: "Start Now",
  imgStart: true,
  img: image4,
  alt: "waningcrescent",
  darkText: false,
  hrefTo: "/signin",
};
