import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Reemplaza 'TU_API_KEY' con tu API Key de NewsAPI
    //   a7d99dbd29ff4c4b96d9060534b23be1;
    const apiKey = "a7d99dbd29ff4c4b96d9060534b23be1";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error al obtener las noticias:", error);
      });
  }, []);

  return (
    <div>
      <h1>Últimas noticias</h1>
      <ul>
        {news?.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
