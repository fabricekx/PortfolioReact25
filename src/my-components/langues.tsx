import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ProgressBar from "./progressBar";



const Langues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation(); // Accès aux traductions

  const countryIcons = {
    "fr":<span className="flag-icon flag-icon-fr mr-2"></span>,
    "gb": <span className="flag-icon flag-icon-gb"></span>,
    "pt": <span className="flag-icon flag-icon-pt"></span>

  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("👀 Section visible ?", entry.isIntersecting);
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.4 } // Déclenche l'animation quand 40% de la section est visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} id="langues" className="p-14 flex flex-col space-y-6 ">
      <h2 className="text-white text-2xl mb-4">{t("langues")}</h2>
      <ProgressBar icon={countryIcons["fr"]} isVisible={isVisible} percentage={95} label={t("francais")} />
      <ProgressBar icon={countryIcons["gb"]} isVisible={isVisible} percentage={90} label={t("anglais")} />
      <ProgressBar icon={countryIcons["pt"]} isVisible={isVisible} percentage={60} label={t("portugais")} />


    </section>
  );
};

export default Langues;
