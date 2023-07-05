import { useEffect, useState } from "react";
import { patternMatch } from "../helpers";
import { useDebounce } from "./useDebounce";

export const usePattern = (pattern, text) => {
  const [result, setRestult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRestult(patternMatch(pattern, text));
    }, 500);
    return () => clearTimeout(timer);
  }, [pattern, text]);

  return result;
};
