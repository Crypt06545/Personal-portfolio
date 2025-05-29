import { projectsImgs, lngLogo } from "../../utils/imagesDict";

const technologies = {
  react: { name: "React.js", logo: lngLogo["react"], logoSize: 25 },
  reactNative: { name: "React Native", logo: lngLogo["react"], logoSize: 25 },
  node: { name: "Node.js", logo: lngLogo["node"], logoSize: 25 },
  mongo: { name: "MongoDB", logo: lngLogo["mongoDB"], logoSize: 12 },
  python: { name: "python", logo: lngLogo["python"], logoSize: 25 },
  express: { name: "Express.js", logo: lngLogo["express"], logoSize: 50 },
  socket: { name: "Socket.io", logo: lngLogo["socketio"], logoSize: 25 },
  mysql: { name: "MySQL", logo: lngLogo["mysql"], logoSize: 25 },
  firebase: { name: "firebase", logo: lngLogo["firebase"], logoSize: 25 },
  wordpress: { name: "WordPress", logo: lngLogo["wordpress"], logoSize: 25 },
  htmlAndCss: { name: "HTML-CSS", logo: lngLogo["html_and_css"], logoSize: 25 },
  js: {
    name: "VanillaJS (ES6, ES7)",
    logo: lngLogo["javascript"],
    logoSize: 25,
  },
  tailwind: { name: "tailwind-css", logo: lngLogo["tailwind"], logoSize: 25 },
  redux: { name: "redux", logo: lngLogo["redux"], logoSize: 25 },
  typescriptlang: {
    name: "typescriptlang",
    logo: lngLogo["typescriptlang"],
    logoSize: 25,
  },
  nextjs: { name: "nextjs", logo: lngLogo["nextjs"], logoSize: 25 },
  nextJsLogo: { name: "nextJsLogo", logo: lngLogo["nextJsLogo"], logoSize: 25 },
};

const {
  react,
  // nextjs,
  // mysql,
  express,
  firebase,
  // reactNative,
  js,
  node,
  // wordpress,
  htmlAndCss,
  // python,
  mongo,
  tailwind,
  redux,
  typescriptlang,
  // nextJsLogo,
  // socket
} = technologies;

export const projects = [
  {
    name: "Weather App",
    photo: projectsImgs["Weather"],
    technologies: [react, express, node],
    url: "https://cypyt0-weather.netlify.app",
    code: "https://github.com/Crypt06545/Weather-app-2.0.git",
  },
  // {
  //     name: 'Doctor Strange Filter',
  //     photo: projectsImgs['Dr'],
  //     technologies: [python],
  //     code: 'https://github.com/Crypt06545/Doctor-Strange'
  // },
  {
    name: "Egypt",
    photo: projectsImgs["Egypt"],
    technologies: [react, tailwind, mongo, node, firebase],
    code: "https://github.com/Crypt06545/Historical-Artifacts-Client",
    url: "https://egypt-history.netlify.app",
  },
  // {
  //     name: 'BMI Calculator',
  //     photo: projectsImgs['Bmi'],
  //     technologies: [python],
  //     code: 'https://github.com/Crypt06545/BMI-Calculate'
  // },
  {
    name: "RouteX",
    photo: projectsImgs["RouteX"],
    technologies: [react, mongo, express, node, firebase],
    code: "https://github.com/Crypt06545/RouteX-client",
    url: "https://visa-portal.netlify.app",
  },
  {
    name: "YouTube Clone",
    photo: projectsImgs["youtube"],
    technologies: [react, tailwind, redux, typescriptlang],
    code: "https://github.com/Crypt06545/youtube-lite.git",
    url: "https://you-tubelite.netlify.app",
  },
  {
    name: "WordBeater Game",
    photo: projectsImgs["Typing"],
    technologies: [htmlAndCss, js],
    url: "https://typing-test-fv7o.onrender.com",
    code: "https://github.com/Crypt06545/Typing-Test",
  },
  {
    name: "Drone",
    photo: projectsImgs["Drone"],
    technologies: [htmlAndCss, js],
    url: "https://drone-shop-jp40.onrender.com",
    code: "https://github.com/Crypt06545/Drone-zone",
  },
];
