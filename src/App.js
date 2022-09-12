import "./App.css"
//import CardWidget from "./CartWidget";
import NavBar from "./components/NavBar"
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemListContainer/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NavBar/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
