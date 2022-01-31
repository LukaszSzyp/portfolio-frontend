import html from "./Assets/Images/HTML5_logo.png";
import css from "./Assets/Images/CSS_logo.png";
import javascript from "./Assets/Images/JavaScript_logo.png";
import react from "./Assets/Images/React_logo.png";
import redux from "./Assets/Images/Redux_Logo.png";
import rest from "./Assets/Images/RestAPI_Logo.png";
import mui from "./Assets/Images/MUI_logo.png";
import ts from "./Assets/Images/Typescript.png";
import hangMan from "./Assets/Images/HangMan.jpg";
import weather from "./Assets/Images/Weather.jpg";
import cncCentrum from "./Assets/Images/cncCentrum.jpg";
import GoKu from "./Assets/Images/GoKu.jpg";
import EcoFriendly from "./Assets/Images/EcoFriendly.jpg";
import Ecommerce from "./Assets/Images/E-commerce.jpg";

export const skills = [
  {
    name: "HTML",
    img: html,
    level: 5,
  },
  {
    name: "CSS",
    img: css,
    level: 3,
  },
  {
    name: "JavaScript",
    img: javascript,
    level: 5,
  },
  {
    name: "React",
    img: react,
    level: 4,
  },
  {
    name: "Rest API",
    img: rest,
    level: 5,
  },
  {
    name: "Material UI",
    img: mui,
    level: 4,
  },
];

export const skillsDev = [
  {
    name: "Redux",
    img: redux,
    level: 2,
  },
  {
    name: "TypeScript",
    img: ts,
    level: 2,
  },
];

export const experience = [
  {
    name: "E-Commerce App layout",
    dsc: "Make layout with React and styled components",
    img: Ecommerce,
    url: "https://elegant-archimedes-d2ca24.netlify.app",
    gitUrl: "https://github.com/LukaszSzyp/E-Commerce-App",
    date: "1.2022",
  },
  {
    name: "Eco Friendly App",
    dsc: "Project carried out by 4 people team: the 'habit tracker' application that tracks the progress of pro-ecological behavior. During this project we worked in scrum methodology",
    img: EcoFriendly,
    url: "https://optimistic-morse-49151e.netlify.app/",
    gitUrl: "https://github.com/infoshareacademy/jfdzr4-reaktorzy",
    date: "11.2021",
  },
  {
    name: "Dragon Ball game",
    dsc: "Game using CSS, Js, Canvas. To move use arrow, shooting is 's' ",
    img: GoKu,
    url: "https://eager-pike-babae3.netlify.app",
    gitUrl: "https://github.com/LukaszSzyp/DragonBall-GAME",
    date: "9.2021",
  },
  {
    name: "Centrum CNC",
    dsc: "Cloning UI from CNC store using only CSS. Source https://sklep.centrum-cnc.pl/19-prowadnice-i-wozki-liniowe-hiwin",
    img: cncCentrum,
    url: "https://kind-feynman-702a06.netlify.app",
    gitUrl: "https://github.com/LukaszSzyp/CNC-centrum",
    date: "9.2021",
  },
  {
    name: "Weather App",
    dsc: "App using REST API meteorological portal check current weather conditions in position load from browser",
    img: weather,
    url: "https://pedantic-khorana-a34ad7.netlify.app",
    gitUrl: "https://github.com/LukaszSzyp/weather-api",
    date: "3.2021",
  },
  {
    name: "hangman game",
    dsc: "My first app in vanilla js ",
    img: hangMan,
    url: "https://wonderful-fermat-5d9205.netlify.app",
    gitUrl: "https://github.com/LukaszSzyp/hangman",
    date: "3.2021",
  },
];
