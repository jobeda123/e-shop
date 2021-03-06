import React from "react";
import "./CartDrawer.css";
import SmallCartDetail from "../SmallCartDetail/SmallCartDetail";
import CartPriceDetail from "../CartPriceDetail/CartPriceDetail";
import EmptyCart from "../EmptyCart/EmptyCart";
import { useHistory } from "react-router";
import { CartContext } from "../../App";
import { useContext } from "react";


const CartDrawer = () => {
  let history = useHistory();
  const [addCart, setAddCart] = useContext(CartContext);

  return (
    <div
      class="offcanvas offcanvas-end cartCanvasWidth"
      tabIndex="-1"
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
      data-bs-backdrop="false"
      data-bs-scroll="true"
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
        {addCart?.length === 0 ? (
          // Empty Cart Error
          <EmptyCart></EmptyCart>
        ) : (
          <div>
            {/* Total Cart Details */}
            <div className="cartScroll py-2">
              {addCart?.map((data, index) => (
                <SmallCartDetail key={index} cartData={data}></SmallCartDetail>
              ))}
            </div>
            {/* Total Price Details */}
            <CartPriceDetail />
            <button
              className="cartCheckOutBtn col-md-12"
              onClick={() => {
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
