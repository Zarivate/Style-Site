import image1 from "../public/backgroundless/file2.png";
import image2 from "../public/backgroundless/file3.png";
import image3 from "../public/backgroundless/file45.png";
import image4 from "../public/backgroundless/file6.png";

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
  to: "discover",
};

export const homeObjTwo = {
  id: "discover",
  lightText: true,
  lightTextDesc: true,
  topLine: "More Info",
  headline: "All the assets used to build this site are royalty free.",
  description: "Nisi nisi ipsum elit ut dolor est irure pariatur do esse.",
  buttonLabel: "Continue",
  imgStart: true,
  img: image2,
  alt: "waningGibbous",
  darkText: false,
  to: "services",
};

export const homeObjThree = {
  id: "signup",
  lightText: true,
  lightTextDesc: true,
  topLine: "Want to Test?",
  headline: "Functionality demonstration below",
  description:
    "If you follow the button below you'll be redirected to a Sign Up/Log In page. You'll receive a confirmation email in your inbox with links to my other projects. Feel free to check them out if you want.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: image3,
  alt: "lastquarter",
  darkText: false,
};

export const homeObjFour = {
  id: "signup",
  lightText: true,
  lightTextDesc: true,
  topLine: "Want to Test?",
  headline: "Functionality demonstration below",
  description:
    "If you follow the button below you'll be redirected to a Sign Up/Log In page. You'll receive a confirmation email in your inbox with links to my other projects. Feel free to check them out if you want.",
  buttonLabel: "Start Now",
  imgStart: true,
  img: image4,
  alt: "waningcrescent",
  darkText: false,
};
