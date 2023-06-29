import Navbar from "./components/layout/navbar/Navbar";
import FetchData from "./components/pages/fetchData/FetchData";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
      {/* <FetchData /> */}
    </div>
  );
}

export default App;
