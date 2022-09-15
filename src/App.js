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
import Cart from "./containers/ItemListContainer/CartContainer";
import ShopProvider from './context/ShopProvider';

function App() {
  return (
    <ShopProvider>
        <BrowserRouter>
          <NavBar />      
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </ShopProvider>
  );
}

export default App;
