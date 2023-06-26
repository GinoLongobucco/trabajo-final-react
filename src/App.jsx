import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

function App() {

  const [mostrarComponente, setMostrarComponente] = useState(false)

  const [numero, setNumero] = useState(0)

  return (
    <div>
      <Navbar />
      <button onClick={()=>setNumero(numero + 1)}>Sumar numero</button>
      <button onClick={()=>setMostrarComponente(!mostrarComponente)}>Montar/desmontar</button>


      {/* {
        mostrarComponente && <ItemListContainer numero={numero} /> 
      } */}

      <ItemDetailContainer />

      
    </div>
  );
}

export default App;
