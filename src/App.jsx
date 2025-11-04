import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext/CartProvider';

import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <div className='contenedor'>
          <Header/>      
          <Routes>
            <Route
            path="/"
            element = {<ItemListContainer titulo={"Bienvenidos"}/> }
            />
            <Route path ="/detail/:id" element= {<ItemDetailContainer/>}/>
            <Route path ="/carrito" element={<h1>Carrito</h1>} />
          </Routes>
        <Footer />
      </div>    
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App
