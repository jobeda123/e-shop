import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';

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
