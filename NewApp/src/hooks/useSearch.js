import { useEffect, useState, useParams } from "react";
import { Search } from "../services/services";

const useSearch = () => {
  const { search, date, orden } = useParams();
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAllNews = async () => {
      try {
        setLoading(true);
        const data = await Search(search, date, orden);
        console.log(data);
        setDatos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadAllNews();
  }, []);

  return { datos, loading, error };
};

export default useSearch;
