import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const [nombre, setNombre] = useState("oscar");

  const saludo = "Hola como estas? Espero que muy bien!"

  return (
    <div>
      <Navbar />
      <button onClick={() => setNombre("fulanito")}>Cambiar nombre</button>
      <HomeContainer nombre={nombre} />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;

// const sumar = ( numero )=>{

// }

// home(25)
