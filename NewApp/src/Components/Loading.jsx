import "./styles/Loading.css";

export const Loading = () => {
  return (
    <aside>
      <div className="loading-container">
        <div className="loading"></div>
      </div>
      <p>Cargando datos...</p>
    </aside>
  );
};
