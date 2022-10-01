import React, { useRef, useContext, useState } from "react";
import Footer from "../Footer/Footer";
import { CartContext } from "../Context/CartContext";
import "./../css/CartStyle.css";
import "../css/style.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <>
    <div className="checkout flex-c justify-content-center">
    {cartItems.length ? (
    <div className="row">
      <div className="heading col">Checkout</div>
      <div className="row">
        <div className="col-75">
          <div className="heading col">Shopping Cart</div>
          
          <div className="col">
            <div><b>Items:</b></div>
              <div className="row">
                <div className="col-25"><img src="../pokemon.png" /></div>
                <div className="col-25">Name</div>
                <div className="col-25">Count</div>
                <div className="col-25 right">Price</div>
              </div>
          </div>
          
          <div className="row">
            <div className="col right">
              <div><b>SubTotal: ₱</b> {cartTotal}</div>
              <div><b>Shipping fee: ₱</b> 49</div>
            </div>
            <div className="col-75"><b><Link to="/">Continue Shopping</Link></b></div>
            <div className="col-25 right bold"><b>Total: ₱ {cartTotal+49}</b></div>
          </div>
        </div>
        <div className="col-25">
          <div className="billing">
            <div className="heading col">Payment Info.</div>
            {cartItems.length ? (
              <div>
                <div className="col">
                  <form className=" form ">
                    <div className="col">
                      <label> <h3><b>Payment Method:</b></h3> </label>
                      <table>
                        <tbody>
                          <tr>
                            <td> <input type="radio" value="CreditCard" name="payment" className="radio-btn" required /> </td>
                            <td className="label"> Credit Card </td>
                          </tr>
                          <tr>
                            <td> <input type="radio" value="PayPal" name="payment" className="radio-btn" required /> </td>
                            <td className="label"> PayPal </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col"> 
                      <label> <h3><b>Account Name:</b></h3> </label>
                      <input type="text" id="accountName" className="input" required />
                    </div>
                    <div className="col"> 
                      <label> <h3><b>Card Number:</b></h3> </label>
                      <input type="text" id="cardNumber" className="input" required />
                    </div>
                    <div className="col"> <button type="submit" className="checkout-btn">CHECKOUT</button> </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="empty">Empty cart</div>
            )}
          </div>
        </div>
      </div>
    </div>
    ) : (
      <div className="checkout flex-c justify-content-center">
        <div className="heading">YOUR SHOPPING CART IS EMPTY!</div>
        <div className="sub-heading text-center"><Link to="/">Continue Shopping</Link></div>
      </div>
      
    )}
    </div>
      <Footer />
    </>
  );
};

export default Checkout;
