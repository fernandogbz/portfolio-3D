import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desarrollador Full Stack Java",
    company_name: "Coding Dojo",
    icon: starbucks,
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
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
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
    name: "Project name",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
