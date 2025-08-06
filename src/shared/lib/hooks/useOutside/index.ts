import { useEffect, type RefObject } from "react";

interface IProps {
  ref: RefObject<HTMLDivElement | null>;
  setIsOpen: (isOpen: boolean) => void;
}

export const useOutside = ({ ref, setIsOpen }: IProps) => {
  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const onkeyup = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", outside);
    window.addEventListener("keyup", onkeyup);

    return () => {
      window.removeEventListener("click", outside);
      window.removeEventListener("keyup", onkeyup);
    };
  }, [ref]);
};
