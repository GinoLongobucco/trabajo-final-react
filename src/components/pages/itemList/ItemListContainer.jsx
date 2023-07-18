import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useParams } from "react-router-dom";
import { Skeleton, Stack } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 1000);
      // reject("salio todo mal")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));

    // .finally(()=>console.log("hola"))
  }, [categoryName]);

  // if(items.length === 0){
  //   return <h1>Cargando....</h1>
  // }

  return (
    <>
      <h1>Aca van los productos</h1>

      {/* {items.length === 0 ? (
        <ClimbingBoxLoader color="steelblue" />
      ) : (
        <ItemList items={items} />
      )} */}
        
    
        <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;

// useEffect( (

//   const obtenerInfo = async ()=>{
//     const tarea = fetch("dasdasdasdasda")
//     let res = await tarea
//     setItems(res)
//   }
//   obtenerInfo()

// )=> , [ ])
