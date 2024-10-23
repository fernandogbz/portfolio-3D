import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  java,
  spring,
  html,
  css,
  bootstrap,
  reactjs,
  redux,
  python,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  docker,
  threejs,
  wordpress,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  codingDojo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "work",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Diseñador de UI/UX",
    icon: mobile,
  },
  {
    title: "Filmmaker",
    icon: backend,
  },
  {
    title: "Fotógrafo",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Desarrollador Full Stack Java",
    company_name: "Coding Dojo",
    icon: codingDojo,
    iconBg: "#383E56",
    date: "Enero 2024 - Junio 2024",
    points: [
      "Adquirí un sólido dominio del ciclo de vida completo del desarrollo de software, desde el diseño hasta la implementación, mediante el desarrollo de actividades prácticas y la elaboración de proyectos, logrando crear sistemas que son robustos, seguros y eficientes; gracias a un programa de estudio intensivo que considera 320 horas académicas.",

      "Comprendí, diseñé e implementé algoritmos eficientes, así como la aplicación de patrones de diseño y buenas prácticas de programación.",

      "Desarrollé aplicaciones web utilizando Java (Spring), JavaScript y MySQL para almacenar y gestionar información de manera eficiente, lo que permite el desarrollo tanto de back-end como de front-end, así como la familiaridad con diversas herramientas, frameworks y paquetes, los cuales agilizan los procesos y mejoran la calidad del código.",

      "Implementé diseños responsivos y que garantizan la compatibilidad entre navegadores.",

      "Diseñé y normalicé esquemas de bases de datos, estableciendo relaciones entre entidades para garantizar la integridad de los datos, al igual que realizar búsquedas y filtrados eficientes.",

      "Colaboré con equipos multifuncionales, incluidos facilitadores, profesores y otros desarrolladores, fomentando la generación de ideas y la resolución conjunta de problemas.",
      "Participé en revisiones de código y brindé comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Desarrollador Frontend",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Fecha",
    points: [
      "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de productos y otros desarrolladores, para crear productos de alta calidad.",
      "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis praesent conubia mattis risus sit elementum justo consequat tempus vivamus",
    name: "Jane Doe",
    designation: "CEO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis praesent",
    name: "Jane Doe",
    designation: "CEO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis praesent conubia mattis risus sit elementum justo consequat tempus vivamus adipiscing.",
    name: "Jane Doe",
    designation: "CEO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project name",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project name",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Camping y Cabañas Río Coreo",
    description:
      "Plataforma web que permite a los usuarios buscar, reservar y pagar cabañas, para un complejo turístico llamado Cabañas Río Coreo, proporcionando una solución conveniente y eficiente para las necesidades del cliente.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "cloudflare",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
