import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to My Portfolio",
      description: "I build modern, responsive, and beautiful web applications.",
      viewWork: "View My Work",
      home: "Home",
      about: "About",
      projects: "Projects",
      myprojects: "My Projects",
      contact: "Contact",
      intro: "Hi, I am a freelance web developer specialized in accessibility and user interface design. I contribute to the creation and maintenance of front-end and back-end user interface components, ensuring compliance with web accessibility standards and best practices to provide an inclusive user experience. I am also a web technology trainer. ",
    showProject: "Show Project"
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue dans mon portfolio",
      description: "Je crée des applications web modernes, réactives et esthétiques.",
      viewWork: "Voir mon travail",
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      myprojects: "Mes Projets",

      contact: "Contact",
      intro: "Bonjour, je suis développeur web freelance, spécialisé en accessibilité et en interfaces utilisateur. Je contribue à la création et à la maintenance des composants d'interface utilisateur front-end et back-end, en veillant au respect des normes et bonnes pratiques d'accessibilité web pour offrir une expérience utilisateur optimale. Je suis également formateur en technologies Web",
      showProject: "Voir le projet"

    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Langue par défaut
    fallbackLng: "en", // Si la langue n'est pas dispo, revenir à l'anglais
    interpolation: { escapeValue: false }, // Permet d'utiliser du HTML dans les traductions
  });

export default i18n;
