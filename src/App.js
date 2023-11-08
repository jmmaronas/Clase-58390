import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailListContainer from './components/ItemDetail/ItemDetailContinerlist';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CartContextProvider from './Context/CartContext';
import CartList from './components/Cart/CartList';
import { datamock } from './services/db_products';
import { Button } from 'react-bootstrap';
import { propulateDB } from './services/populateDB';




function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Button onClick={() => propulateDB(datamock)}>Poblar DB</Button>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>        
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
