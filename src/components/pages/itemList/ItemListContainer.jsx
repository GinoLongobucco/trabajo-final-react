import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  // VARIANTE 1
  useEffect(() => {
    console.log("llamado a una API");
  }, []);

  return <ItemList />;
};

export default ItemListContainer;
