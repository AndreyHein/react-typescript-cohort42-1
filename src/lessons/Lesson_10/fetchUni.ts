import { useState, useEffect } from "react";

export const fetchUni = async (country: string) => {
  const [uni, setUni] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const URL_UNI: string = "http://universities.hipolabs.com/search?country=";

  const getUni = async () => {
    setUni(undefined);
    setError(undefined);

    const response = await fetch(URL_UNI + `${country}`);
    const result = await response.json();
    if (response.ok) {
      setUni(`${result.web_pages} ${result.name}${result.country}`);
    } else {
      setError("Some Network Error");
    }
  };
  useEffect(() => {
    getUni();
  }, []);
};
