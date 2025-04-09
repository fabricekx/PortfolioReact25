import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to My Portfolio",
      description:
        "I build modern, responsive, and beautiful web applications.",
      viewWork: "View My Work",
      home: "Home",
      about: "About",
      projects: "Projects",
      myprojects: "My Projects",
      contact: "Contact",
      intro:
        "Hi, I am a freelance web developer specialized in accessibility and user interface design. I contribute to the creation and maintenance of front-end and back-end user interface components. ",
      intro2 : "I ensure compliance with web accessibility standards and best practices to provide an inclusive user experience. I am also a web technology trainer.",
        showProject: "Show Project",
      techno:
        "Designed with Figma, coded with Visual Studio Code, using the React framework and the Strapi CMS",
      // Partie About me
      aboutMe:
        "Specialized in React, React Native for the front end, and Symfony, Nest.js for the back end, I design high-performance, optimized applications. My approach combines technical rigor, user experience, and code quality. As a trainer, I share my expertise to support budding developers.",
      experiences: "Experiences",
      formation: "Education",
      programmation: "Programming",
      langues: "Languages",
      // Partie programmation ( dans progressBar )
      programmation2: "Programming skills",
        // Partie langues
        francais: "French",
        anglais: "English",
        portugais: "Portuguese",
         // Partie hobbies
      montagne : "Mountain",
      voilier : "Sailing",
      randonnée: "Hiking",
      botanique: "Botanical",
        // Partie Contact
      contactMe: "Let's stay in touch!"
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue dans mon portfolio",
      description:
        "Je crée des applications web modernes, réactives et esthétiques.",
      viewWork: "Voir mon travail",
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      myprojects: "Mes Projets",
      contact: "Contact",
      intro:
        "Bonjour, je suis développeur web freelance, spécialisé en accessibilité et en interfaces utilisateur. Je contribue à la création et à la maintenance des composants d'interface utilisateur front-end et back-end. ",
      intro2 : "Je veille au respect des normes et bonnes pratiques d'accessibilité web pour offrir une expérience utilisateur optimale. Je suis également formateur en technologies Web",
        showProject: "Voir le projet",
      techno:
        "Designé avec Figma, codé avec VisualStudioCode, avec le frameWork React et le CMS Strapi",
      // Partie About
      aboutMe:
        "Spécialisé en React, React Native pour le Front-End et Symfony,  Nest.js pour le Back-End, je conçois des applications performantes et optimisées. Mon approche allie rigueur technique, expérience utilisateur et qualité du code. En tant que formateur, je transmets mon expertise pour accompagner les développeurs en devenir.",
      experiences: "Experiences",
      formation: "Formation",
      programmation: "Programmation",
      langues: "Langues",
      // Partie programmation ( dans progressBar )
      programmation2: "Compétences en programmation",
      // Partie langues
      francais: "Français",
      anglais: "Anglais",
      portugais: "Portugais",
      // Partie hobbies
      montagne : "Montagne",
      voilier : "Voilier",
      randonnée: "Randonnée",
      botanique: "Botanique",
      // Partie Contact
      contactMe: "Restons en contact!"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Langue par défaut
  fallbackLng: "en", // Si la langue n'est pas dispo, revenir à l'anglais
  interpolation: { escapeValue: false }, // Permet d'utiliser du HTML dans les traductions
});

export default i18n;
