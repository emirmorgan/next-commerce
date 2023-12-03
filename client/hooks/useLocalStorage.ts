import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => initialValue);

  const initialize = () => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  };

  useEffect(() => {
    setStoredValue(initialize());
  }, []);

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
