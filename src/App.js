import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailListContainer from './components/ItemDetail/ItemDetailContinerlist';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Formulario from './components/Form/Form';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>         
      <Routes>
        <Route path='/' element={<Formulario />}/>
        <Route path='/product/:productId' element={<ItemDetailListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
