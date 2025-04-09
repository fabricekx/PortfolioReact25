// Hook personnalisé permettant de savoir si une section est visible à l'écran, et le cas échéant 
// de déclancher un évennement (comme une animation) avec isVisble &&
// il faut ajouter ref={ref} comme attribut dans la balise cible

import { useEffect, useState, useRef } from "react";

/**
 * Hook personnalisé pour détecter si une section est visible à l'écran.
 *
 * @returns {Object} Un objet contenant :
 * - `ref` : Une référence React à attacher à l'élément (comme attribut) que l'on veut observer.
 *              exemple <div ref={ref}>
 * - `isVisible` : Un booléen indiquant si l'élément est visible (true) ou non (false).
 *                      Permet de déclancher par exemple une animation lorsque l'element est visible,
 *                      
 * @example
 * // Utiliser un hook par section
 * const { ref: refDiv1, isVisible: isVisibleDiv1 } = useSectionReacher();
 * const { ref: refDiv2, isVisible: isVisibleDiv2 } = useSectionReacher();

 * return (
 *   <section ref={refDiv1}>
 *     {isVisible && <p>Cette section est visible !</p>}
 *   </section>
 * 
 *  <motion.div
  ref={refDiv2}
  className= "bg-blue-500 h-4 rounded-full"
  initial={{ width: 0 }}
          animate={{ width: isVisible?`${percentage}%`: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
 * );
 * 
 */

const useSectionReacher = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log("👀 Section visible ?", entry.isIntersecting);
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

  return { ref, isVisible };
};

export default useSectionReacher;
