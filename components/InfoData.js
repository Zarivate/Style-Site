import image1 from "../public/pexelsOriginal11.jpg";
import image2 from "../public/pexelsOriginal5.jpg";
import image3 from "../public/pexelsOriginal3.jpg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Thie Site",
  headline: "A simple showcase",
  description:
    "Made to demonstrate my abilites in building sites from the ground up. NextJS 14 was used alongside styled components to create a fully functional site that's also optimized for mobile users.",
  buttonLabel: "Continue",
  imgStart: false,
  img: image1,
  alt: "nightMoon",
  dark: false,
  primary: false,
  darkText: false,
  to: "discover",
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Discover More",
  headline: "Minim esse ut dolor non fugiat sit eu esse exercitation aliqua.",
  description:
    "Pariatur occaecat qui sint veniam mollit ex duis. Laborum consequat Lorem culpa proident sint. Tempor anim laboris deserunt est sint deserunt cupidatat mollit eiusmod excepteur.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: image2,
  alt: "blank2",
  dark: false,
  primary: false,
  darkText: true,
  to: "services",
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Want to Test?",
  headline: "Functionality demonstration below",
  description:
    "If you follow the button below you'll be redirected to a Sign Up/Log In page. You'll receive a confirmation email but will have no ",
  buttonLabel: "Start Now",
  imgStart: false,
  img: image3,
  alt: "blank3",
  dark: false,
  primary: false,
  darkText: true,
};
