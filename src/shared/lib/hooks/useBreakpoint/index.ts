import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "desktop";

const getResult = (width: number): Breakpoint => {
  if (width < 576) return "mobile";
  return "desktop";
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getResult(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const res = getResult(window.innerWidth);
      setBreakpoint((prev) => (prev !== res ? res : prev));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};
