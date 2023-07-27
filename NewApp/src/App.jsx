import "./App.css";
import { FooterComponent } from "./Components/FooterComponent";
import { HeaderComponent } from "./Components/HeaderComponent";
import { SecionePrincipalComponent } from "./Components/SecionPrincipalComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <SecionePrincipalComponent />
      <FooterComponent />
    </>
  );
}

export default App;
