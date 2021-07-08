import React from "react";
import "./CartDrawer.css";
import SmallCartDetail from "../SmallCartDetail/SmallCartDetail";
import CartPriceDetail from "../CartPriceDetail/CartPriceDetail";
import EmptyCart from "../EmptyCart/EmptyCart";
import { useHistory } from "react-router";

const CartDrawer = () => {
  const myArray = localStorage.getItem("cart");
  const fromLocalStorage = JSON.parse(myArray); // json theke array te convert
  console.log(fromLocalStorage);
  let history = useHistory();

  return (
    <div
      class="offcanvas offcanvas-end cartCanvasWidth"
      tabindex="-1"
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
    >
      <div class="offcanvas-header">
        <h4 class="offcanvas-title" id="offcanvasCartLabel">
          Shopping Cart
        </h4>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
        {fromLocalStorage?.length === 0 ? (
          // Empty Cart Error
          <EmptyCart></EmptyCart>
        ) : (
          <div>
            {/* Total Cart Details */}
            <div className="cartScroll py-2">
              {fromLocalStorage?.map((data, index) => (
                <SmallCartDetail key={index} cartData={data}></SmallCartDetail>
              ))}
            </div>
            {/* Total Price Details */}
            <CartPriceDetail />
            <button
              className="cartViewBtn my-2 col-md-12"
              onClick={() => {
                console.log("View Button");
                history.push("/shoppingCart");
              }}
            >
              VIEW CART
            </button>
            <button
              className="cartCheckOutBtn mb-2 col-md-12"
              onClick={() => {
                console.log("Check out Button");
                history.push("/shipping");
              }}
            >
              CHECK OUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
