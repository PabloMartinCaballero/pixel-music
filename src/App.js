
import './App.css';
import NavBar from './component/navbar/navbar';
import Cart from './component/cartwidget/cart';
import ItemListContainer from './component/item/item';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cart />
      <ItemListContainer title = {"Carrito de compras"} />
    </div>
  );
}

export default App;


