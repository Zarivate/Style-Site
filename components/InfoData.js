import image1 from "/public/backgroundless/moon1.png";
import image2 from "/public/backgroundless/moon2.png";
import image3 from "/public/backgroundless/moon3.png";
import image4 from "/public/backgroundless/moon4.png";
import image6 from "/public/backgroundless/moon5.png";

export const homeObjOne = {
  id: "about",
  topLine: "About This Site",
  headline: "A simple showcase",
  description:
    "Made to demonstrate my abilites in building sites from the ground up. NextJS 14 was used alongside styled components to create a fully responsive site.",
  buttonLabel: "Continue",
  imgStart: false,
  img: image1,
  alt: "fullMoon",
  to: "more",
};

export const homeObjTwo = {
  id: "more",
  topLine: "Responsive",
  headline: "This site has been optimized for mobile users as well.",
  description:
    "Go ahead and modify the size of this window. A collapsable hamburger menu will replace the navbar once the screen reaches a certain size.",
  buttonLabel: "Continue",
  imgStart: true,
  img: image2,
  alt: "waningGibbous",
  to: "details",
};

export const homeObjThree = {
  id: "details",
  topLine: "Source Code",
  headline: "Found at my Github",
  description:
    "Alongside the code for my other projects, the code for this project can be found ",
  description2: "here",
  buttonLabel: "Continue",
  imgStart: false,
  img: image3,
  alt: "lastquarter",
  to: "test",
};

export const homeObjFour = {
  id: "test",
  topLine: "Want to Test?",
  headline: "Functionality demonstration",
  description:
    "If you follow the button below you'll be redirected to a simple Log In page. Once logged in, you'll be redirected to a hidden page with details about how the session works and links to more advanced sites I've made.",
  buttonLabel: "Start Now",
  imgStart: true,
  img: image4,
  alt: "waningcrescent",
  hrefTo: "/signin",
};

export const dashObjOne = {
  id: "first",
  headline: "Welcome",
  description:
    "This page is only accessible after successfully signing up. The way it's done is by creating a cookie that's used to see whether the user is currently in a session or not. It's rather unsecure but for the purpose of this site it's fine. The logout button in the next section will log you out by destroying the cookie and redirecting you to the main page.",
  buttonLabel: "Continue",
  imgStart: false,
  img: image4,
  alt: "crescent1",
  to: "second",
  dashScreen: true,
};

export const dashObjTwo = {
  id: "second",
  headline: "A More Advanced",
  description:
    "Site is where you'll be redirected to if you follow the button below. The site will be a full stack Next JS application with a database and proper user authentication. ",
  buttonLabel: "Go to fullstack site",
  buttonLabe2: "Log out",
  imgStart: true,
  img: image6,
  alt: "crescent2",
  dash: "Logout",
  // TODO: Change this so it connects to a more complete site
  destination: "https://voidboard.vercel.app/",
  dashScreen: true,
};
