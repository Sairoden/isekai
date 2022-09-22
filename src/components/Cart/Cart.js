import React, { useRef, useContext, useEffect } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

import OnClickOutside from "./hook/OnClickOutside";
import "./../css/CartStyle.css";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Cart = ({ isCartToggle, setCartToggle }) => {
  // control for clicking outside the layer
  const $sideBarRef = useRef();
  OnClickOutside($sideBarRef, () => setCartToggle(false));

  return (
    <>
      <div className="cart-icon" onClick={() => setCartToggle(true)}>
        <div className="wrapper">
          <ShoppingCartOutlined />
          {/* {cartItems.length > 0 && (
      <div className="counter">{cartItems.length}</div>
    )} */}
        </div>
      </div>
      <div className="cart">
        {isCartToggle && <div className="overlay"></div>}
        <div
          ref={$sideBarRef}
          className={isCartToggle ? "cart-bar expand" : "cart-bar shrink"}
        >
          <div className="heading">
            Cart
            <CloseCircleOutlined onClick={() => setCartToggle(false)} />
          </div>
          <div className="empty">Empty cart</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
