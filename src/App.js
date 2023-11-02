import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailListContainer from './components/ItemDetail/ItemDetailContinerlist';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CartContextProvider from './Context/CartContext';
import CartList from './components/Cart/CartList';




function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
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
