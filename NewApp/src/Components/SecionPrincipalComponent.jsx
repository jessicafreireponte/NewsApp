import { useState } from "react";
import { format } from "date-fns";
import useNewsAll from "../hooks/useNewsAll";
import { Loading } from "./Loading";
import "./styles/Section.css";

export const SecionePrincipalComponent = () => {
  const { news, loading, error } = useNewsAll();
  const [salir, setSalir] = useState(false);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error al cargar las noticias: {error}</p>;
  }

  if (!news || news.length === 0) {
    return <p>No se encontraron noticias.</p>;
  }

  const hangleToggle = () => {
    console.log("no va me cago en la puta");
    setSalir(!salir);
  };

  return (
    <section>
      <ul className="container">
        {news.articles?.map((e, index) => (
          <li key={index}>
            <header>
              <h2>{e.title} </h2>
              <h5>{e.description} </h5>
              <p>{format(new Date(e.publishedAt), "dd-MM-yyyy - HH:mm")} </p>
            </header>
            <img src={e.urlToImage} onClick={hangleToggle} />
            <article>
              {e.content}
              <h6>{e.source.name} </h6>
            </article>
            <aside className={salir && "visible"}>
              <div className={salir && "visible"}>
                ¿Desea salir a un enlace externo?
                <span>
                  <button>
                    <a href={e.url}>Sí</a>
                  </button>
                  <button onClick={hangleToggle}>No</button>
                </span>
              </div>
            </aside>
          </li>
        ))}
      </ul>
    </section>
  );
};
