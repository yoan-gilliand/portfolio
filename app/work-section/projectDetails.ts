export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "MATCH RACE",
    description: "Match Race is a desktop application designed to streamline photo competition organization for Photo Club Fribourg, featuring automated pairing and voting, real-time audience engagement, and a user-friendly interface.",
    technologies: ["Electron.js", "Vue.js", "Vuetify"],
    github: "",
    demo: "https://www.linkedin.com/in/yoan-gilliand/#:~:text=Projets-,Match%20Race%20%E2%80%93%20A%20Digitalized%20Photo%20Competition%20Platform,-Match%20Race%20%E2%80%93%20A",
    image: require("../../public/projects/matchrace.jpeg"),
    available: true,
  },
  {
    id: 1,
    name: "EPARKING",
    description: "eParking is a web platform designed to modernize the management of parking permit requests for HES-SO//FR, featuring interactive forms, secure authentication, and an admin interface for efficient request handling and data management.",
    technologies: ["Vue.js", "Express.js", "MySQL"],
    github: "",
    demo: "https://www.linkedin.com/in/yoan-gilliand/#:~:text=Autres%20contributeurs-,eParking%20%E2%80%93%20A%20Smart%20Parking%20Permit%20Management%20Platform,-eParking%20%E2%80%93%20A%20Smart",
    image: require("../../public/projects/eparking.jpg"),
    available: true,
  },
];