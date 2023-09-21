import { useLayoutEffect, useState } from "react";

export const useMatchMedia = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  console.log("render");

  const setMedia = () => {
    if (window.matchMedia("(min-width: 1001px)").matches) {
      console.log("isDesktop");
      setIsDesktop(true);
    }
    if (
      window.matchMedia("(min-width: 501px) and (max-width: 1000px)").matches
    ) {
      console.log("isTablet");
      setIsTablet(true);
    }
    if (
      window.matchMedia("(min-width: 300px) and (max-width: 500px)").matches
    ) {
      console.log("isMobile");
      setIsMobile(true);
    }
  };

  useLayoutEffect(() => {
    setMedia();
  }, []);

  return { isDesktop, isTablet, isMobile };
};
