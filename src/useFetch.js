import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [links, setLinks] = useState(null);
  const hadleLinks = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setLinks(data);
  };
  useEffect(() => {
    hadleLinks(url);
  }, [url]);
  return { links };
};

export default useFetch;
