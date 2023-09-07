import { useEffect, useRef, MutableRefObject } from "react";

export default function useClickOutside(
  elRef: MutableRefObject<HTMLDivElement>,
  callback: () => void
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (elRef.current && !elRef.current.contains(e.target)) {
        callbackRef.current();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [elRef, callback]);
}
