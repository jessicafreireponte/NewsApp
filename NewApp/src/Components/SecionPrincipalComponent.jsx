import useNewsAll from "../hooks/useNewsAll";
import { Loading } from "./Loading";
import "./styles/Section.css";

export const SecionePrincipalComponent = () => {
  const { news, loading, error } = useNewsAll();
  console.log(news);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error al cargar las noticias: {error}</p>;
  }

  if (!news || news.length === 0) {
    return <p>No se encontraron noticias.</p>;
  }

  return (
    <section>
      <ul className="container">
        {news.articles?.map((e, index) => (
          <li key={index}>
            <header>
              <h2>{e.title} </h2>
              <h5>{e.description} </h5>
              <p>{e.publishedAt} </p>
            </header>
            <img src={e.urlToImage} onClick={e.url} />
            <article>
              {e.content}
              <h6>{e.source.name} </h6>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
