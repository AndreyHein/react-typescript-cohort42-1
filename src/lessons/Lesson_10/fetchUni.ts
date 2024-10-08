export const fetchUni = async (country: string) => {
  const URL_UNI: string = `http://universities.hipolabs.com/search?country=${country}`;

  const response = await fetch(URL_UNI);
  const result = await response.json();

  if (response.ok) {
    if (result.length === 0) {
      return { error: "No universities found" };
    } else {
      return { data: result.slice(0, 15) };
    }
  } else {
    return { error: "Some Network Error" };
  }
};
