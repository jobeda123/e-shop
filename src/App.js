import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import WomenPage from './pages/WomenPage/WomenPage';
import MenPage from './pages/MenPage/MenPage';
import JewelleryPage from './pages/JewelleryPage/JewelleryPage';
import ElectronicsPage from './pages/ElectronicsPage/ElectronicsPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import ShippingPage from './pages/ShippingPage/ShippingPage';
import OrderSummaryPage from './pages/OrderSummaryPage/OrderSummaryPage';



export const UserContext = createContext();

function App() {
  const [addCart, setAddCart] = useState([]);
  localStorage.setItem('cart',JSON.stringify(addCart));

  return (
  <UserContext.Provider value={[addCart, setAddCart]}>
  <div className="App">
    <Router>
      <Switch>

        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/category/women">
          <WomenPage />
        </Route>

        <Route path="/category/men">
          <MenPage />
        </Route>

        <Route path="/category/jewellery">
          <JewelleryPage />
        </Route>

        <Route path="/category/electronics">
          <ElectronicsPage />
        </Route>

        <Route path="/shoppingCart">
          <ShoppingCartPage />
        </Route>

        <Route path="/shipping">
          <ShippingPage />
        </Route>

        <Route path="/orderSummary">
          <OrderSummaryPage />
        </Route>

        {/* <Route path="/womenClothing">
          <WomenClothingPage />
        </Route>

        <Route path="/menClothing">
          <MenClothingPage />
        </Route> */}

        {/* <Route path="/jewellery">
          <JewelleryPage />
        </Route> */}

        {/* <Route path="/electronics">
          <ElectronicsPage />
        </Route> */}

        <Route path="/">
          <HomePage />
        </Route>
        
      </Switch>
    </Router>
  </div>
</UserContext.Provider >
);
}

export default App;
