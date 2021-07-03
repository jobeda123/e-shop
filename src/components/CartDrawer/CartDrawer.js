import React from "react";
import "./CartDrawer.css";
import SmallCartDetail from "../SmallCartDetail/SmallCartDetail";
import CartPriceDetail from "../CartPriceDetail/CartPriceDetail";
import EmptyCart from "../EmptyCart/EmptyCart";

const CartDrawer = () => {
  const myArray = localStorage.getItem("cart");
  const fromLocalStorage = JSON.parse(myArray); // json theke array te convert
  console.log(fromLocalStorage);

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
        {fromLocalStorage.length === 0 ? (
          // Empty Cart Error
          <EmptyCart></EmptyCart>
        ) : (
          <div>
            {/* Total Cart Details */}
            <div className="cartScroll py-2">
              {fromLocalStorage.map((data, index) => (
                <SmallCartDetail key={index} cartData={data}></SmallCartDetail>
              ))}
            </div>
            {/* Total Price Details */}
            <CartPriceDetail />
            <button className="cartCheckOutBtn my-3">CHECK OUT</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
