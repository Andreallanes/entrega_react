import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './components/Cart/Cart';

import './App.css';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida';
import { Login } from './Login/Login';

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <div className='contenedor'>
           
          <Routes>
            <Route element ={<MainLayout/>} >
              <Route
                path="/"
                element = {<ItemListContainer titulo={"Bienvenidos"}/> }
              />
              <Route 
                path="/category/:category" 
                element={<ItemListContainer titulo={"Bienvenidos"}/>}
              />
              <Route path ="/detail/:id" element= {<ItemDetailContainer/>}/>
              <Route path ="/carrito" element={<Cart/>} />
            </Route>

            {/* <Route path ="/admin" element={<ProductFormContainer/>} /> */}

            <Route path= "/admin" element = {<AdminLayout />}>
              <Route index element = {<Login />}/>

              <Route path="alta-productos" 
                element= {
                  <RutaProtegida>
                    <ProductFormContainer/>
                  </RutaProtegida>
                } 
              />
            </Route>

          </Routes>
          {/* <Footer/> */}
      </div>    
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App
