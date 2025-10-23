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
      <div>
        <Header/>
        <CartProvider>
          <Nav />
          <Routes>
            <Route
            path="/"
            element = {<ItemListContainer titulo={"Bienvenidos"}/> }
            />
            <Route path ="/detail/:id" element= {<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
        <Footer />
      </div>    
    </BrowserRouter>
    </>
  );
}

export default App
