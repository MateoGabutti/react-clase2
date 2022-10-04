import React from "react";
import NotFound from '../components/NavBar/NotFound';
import Cart from '../containers/ItemListContainer/CartContainer';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemListContainer/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Routing = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;