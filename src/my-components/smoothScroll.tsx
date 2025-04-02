import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,  // Durée du scroll fluide
      easing: (t) => 1 - Math.pow(1 - t, 4),  // Easing pour un effet plus doux
      smoothWheel: true,  // Activer le scroll fluide pour la molette/touchpad
    });

    // Rafraîchir Lenis à chaque frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Nettoyage au démontage du composant
    return () => lenis.destroy();
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
