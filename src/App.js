import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WomenPage from "./pages/WomenPage/WomenPage";
import MenPage from "./pages/MenPage/MenPage";
import JewelleryPage from "./pages/JewelleryPage/JewelleryPage";
import ElectronicsPage from "./pages/ElectronicsPage/ElectronicsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import ShippingPage from "./pages/ShippingPage/ShippingPage";
import OrderSummaryPage from "./pages/OrderSummaryPage/OrderSummaryPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import AddAdminPage from "./pages/AddAdminPage/AddAdminPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SingleOrderDetailPage from './pages/SingleOrderDetailPage/SingleOrderDetailPage';
import FlashSalePage from './pages/FlashSalePage/FlashSalePage';
import LatestCollectionPage from "./pages/LatestCollectionPage/LatestCollectionPage";
import SearchPage from "./pages/SearchPage/SearchPage";


export const UserContext = createContext();
export const CartContext = createContext();
export const OrderContext = createContext();
export const HandleAddCartContext = createContext();
export const HandleRemoveCartContext = createContext();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
  });

  const [orderId, setOrderId] = useState();
  const [addCart, setAddCart] = useState([]);
  window.localStorage.setItem("cart", JSON.stringify(addCart));


  const handleRemoveCart = (cardDetails) => {
    console.log("remove item from cart drawer........", cardDetails);
    const newCart = addCart.filter((pd) => pd.itemID !== cardDetails.itemID);
    setAddCart(newCart);
  };

  
  const handleAddCart = (cardDetails) => {
    console.log("add to cart button click from latest collection...");

    const myArray = window.localStorage.getItem("cart");
    const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

    console.log("From local Storage", fromLocalStorage);

    const newCart = [...fromLocalStorage, cardDetails]; // all cart item copy
    setAddCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));

    // window.localStorage.removeItem('cart');
  };

  return (
    <OrderContext.Provider value={[orderId, setOrderId]}>
    <UserContext.Provider value={[user, setUser]}>
      <CartContext.Provider value={[addCart, setAddCart]}>
        <HandleAddCartContext.Provider value={handleAddCart}>
          <HandleRemoveCartContext.Provider value={handleRemoveCart}>
            <div className="App">
              <Router>
                <Switch>
                  <Route path="/home">
                    <HomePage />
                  </Route>

                  <Route path="/category/women">
                    <WomenPage />
                  </Route>


                  <Route path="/productBySearch/:searchText">
                    <SearchPage />
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

                  <Route path="/flashSale">
                    <FlashSalePage />
                  </Route>

                  <Route path="/latestCollection">
                    <LatestCollectionPage />
                  </Route>

                  <PrivateRoute path="/shoppingCart">
                    <ShoppingCartPage />
                  </PrivateRoute>

                  <PrivateRoute path="/shipping">
                    <ShippingPage />
                  </PrivateRoute>

                  <PrivateRoute path="/orderSummary">
                    <OrderSummaryPage />
                  </PrivateRoute>

                  <PrivateRoute path="/orderDetail/:id">
                    <SingleOrderDetailPage />
                  </PrivateRoute>

                  <PrivateRoute path="/dashboard/profile">
                    <ProfilePage />
                  </PrivateRoute>

                  <PrivateRoute path="/dashboard/orderHistory">
                    <OrderHistoryPage />
                  </PrivateRoute>

                  <PrivateRoute path="/dashboard/addAdmin">
                    <AddAdminPage />
                  </PrivateRoute>

                  <PrivateRoute path="/dashboard/addProduct">
                    <AddProductPage />
                  </PrivateRoute>

                  <Route path="/login">
                    <LoginPage />
                  </Route>

                  <Route path="/signUp">
                    <SignUpPage />
                  </Route>

                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </Router>
            </div>
          </HandleRemoveCartContext.Provider>
        </HandleAddCartContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
    </OrderContext.Provider>
  );
}

export default App;
