import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Routes, Route} from'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from'./containers/ItemDetailContainer'
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path = "/Cart" element = {<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
