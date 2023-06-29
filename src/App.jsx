import Navbar from "./components/layout/navbar/Navbar";
import FetchData from "./components/pages/fetchData/FetchData";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer /> */}
      <FetchData />
    </div>
  );
}

export default App;
