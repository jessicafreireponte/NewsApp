import { useEffect, useState } from "react";
import { GetNewsFetch } from "../services/services";

const useNewsAll = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAllNews = async () => {
      try {
        setLoading(true);
        const data = await GetNewsFetch();
        console.log(data);
        setNews(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadAllNews();
  }, []);

  return { news, loading, error };
};

export default useNewsAll;
