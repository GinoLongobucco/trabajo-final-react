import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({numero}) => {
  const [products, setProducts] = useState([]);
  
  const [edad, setEdad] = useState(20);
  
  // VARIANTE 1
  useEffect( ()=>{
    console.log("llamado a una API")
    setProducts([{},{}])
  }, [] )

  // VARIANTE 2

  // useEffect( ()=>{
  //   console.log("llamado a la API")

  // }, [edad])
  

  console.log("se actualizo")

  return (
    <ItemList
      edad={edad}
      setEdad={setEdad}
      products={products}
      setProducts={setProducts}
    />
  );
};

export default ItemListContainer;
