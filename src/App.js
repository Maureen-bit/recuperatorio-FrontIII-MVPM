import { useState } from "react";
import Tarjeta from "./componentes/Tarjeta";

import "./index.css";

// CONSIGNAS EN APP:
// 1- implementar 2 estados, uno para manejar el tema claro/oscuro del sitio y otro estado que maneje la plataforma favorita seleccionada
// 2- crear los metodos que me permitan asiganarle valor correspondiente a esas variables
// 3- incorporar el componete Tarjeta en 🚩


function App() {

  const [tema, setTema] = useState(false);
  const [plataformaFavorita, setPlataformaFavorita] = useState("");
  
  const handleTema = () => {
    setTema(!tema);
  };

  const handleFavorita = (plataforma) => {
    setPlataformaFavorita(plataforma)
  };

  return (
    <div id="App" className={tema ? "dark" : ""}>
      <h1>¡Bienvenidos!</h1>
      <h2>Contanos, ¿cuál es tu plataforma favorita?</h2>
      { plataformaFavorita !== "" ? (<h4 className={ plataformaFavorita === "Twitter" ? "tw" : plataformaFavorita === "Facebook" ? "fb" : "yt" }> {plataformaFavorita}</h4>) : ("")}

      <Tarjeta handleFavorita={handleFavorita}/>

      <button onClick={() => { handleTema(); }}>Cambiar tema</button>
    </div>
  );
}


export default App;
