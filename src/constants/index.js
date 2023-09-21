import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    angular,
    C,
    cpp,
    express,
    java,
    mysql,
    python,
    vuejs,
    weather,
    travelbuddy,
    brainmap,
    bustrack,
    threejs,
    akshara,
    mirs,
    ssn,
    nptel,
    coursera,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "AI & ML",
      icon: mobile,
    },
    {
      title: "Frontend Development",
      icon: backend,
    },
    {
      title: "Software Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "VueJS",
      icon: vuejs,
    },
    {
      name: "AngularJS",
      icon: angular,
    },
    
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Akshara High School",
      company_name: "10th | BSEAP",
      icon: akshara,
      iconBg: "#fff",
      date: "2018",
      points: [
        "Secured a GPA of 10.",
        "Acted as School Pupil Leader.",
      ],
    },
    {
      title: "Maharishi International Residential School",
      company_name: "12th | CBSE",
      icon: mirs,
      iconBg: "#fff",
      date: "2018-2020",
      points: [
        "Secured 93.2% in board examinations.",
        "Part of FIITJEE integrated classroom program.",
      ],
    },
    {
      title: "SSN COllege of Engineering",
      company_name: "B.Tech - Information Technology",
      icon: ssn,
      iconBg: "#fff",
      date: "2020-2024",
      points: [
        "Currently hold a CGPA of 9.33.",
        "Treasurer, Association of Information Technologists",
        "AI & ML head, ProCode club of IT",
        "Received a Medal and a certificate for getting the second rank in the 1st semester.",
        "Received a Medal and a certificate for getting the first rank in the 2nd semester.",
        "Received merit scholarship for 1st year and 2nd year UG.",
      ],
    },
  ];
  
  const testimonials = [
    {
      name: "Programming in JAVA",
      description: "Offered by IIT Kharagpur that deals with JAVA. Secured 88/100",
      company: "NPTEL",
      image: nptel,
    },
    {
      name: "Programming for Everybody Specialization",
      description: "Offered by the University of Michigan",
      company: "Coursera",
      image: coursera,
    },
    {
      name: "Deep Learning Specialization",
      description: "Offered by DeepLearning.AI",
      company: "Coursera",
      image: coursera,
    },
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "Weather app using Vue.js and OpenWeatherMap API. With real-time weather forecast and location search .",
      tags: [
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/LikhithVenkat/weather-app",
    },
    {
      name: "Travel Buddy Application",
      description:
        "A web application that makes it easier to find travel companion. MEAN stack is used to develop the application.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Angular.js",
          color: "black-text-gradient",
        },
      ],
      image: travelbuddy,
      source_code_link: "https://github.com/LikhithVenkat/travelbuddy",
    },
    {
      name: "Bus Tracking System",
      description:
        "Progressive web app that helps students track their buses, receive updates on changes of routes, and notify the students when the bus is 1km away from the boarding point.",
      tags: [
        {
          name: "Web API",
          color: "blue-text-gradient",
        },
        {
          name: "MEAN Stack",
          color: "pink-text-gradient",
        },
      ],
      image: bustrack,
      source_code_link: "https://github.com/LikhithVenkat",
    },
    {
      name: "Mapping brain signal using fMRI scan using deep learning",
      description:
        "",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
      ],
      image: brainmap,
      source_code_link: "https://github.com/LikhithVenkat",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };