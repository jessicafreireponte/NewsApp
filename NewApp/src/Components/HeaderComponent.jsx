import "boxicons";
import "./styles/Header.css";
import { useState } from "react";

export const HeaderComponent = () => {
  const [display, setDisplay] = useState("novisible");

  const handleToggle = () => {
    if (display === "novisible") {
      return setDisplay("visible");
    }
    return setDisplay("novisible");
  };

  return (
    <header>
      <nav>
        <box-icon
          name="menu"
          rotate="180"
          animation={display === "visible" ? "tada" : ""}
          onClick={handleToggle}
        ></box-icon>
        <ul className={`menuHamburgesa ${display}`}>
          <h3>Seciones</h3>
          <li>Deportes</li>
          <li>Deportes</li>
          <li>Deportes</li>
          <li>Deportes</li>
          <li>Deportes</li>
        </ul>
      </nav>
    </header>
  );
};
