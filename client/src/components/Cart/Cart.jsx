import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../store/cartSlice";
import "./Cart.scss";
import Option from "./Option";
import RightPart from "./RightPart";
import SubTotal from "./SubTotal";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch()
  const handleAdd = (prod) =>{
    dispatch(addProduct({product:prod,amount:prod.price.mrp,quantity:1}))
  }

  const handleRemove = (prod) =>{
    dispatch(removeProduct({product:prod,amount:prod.price.mrp,quantity:-1}))
  }
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>select all items</p>
          <span className="leftbuyprice">price</span>
          <Divider />
          {cartItems.carts.map((c) => (
            <div className="item_container">
              <img src={c.prod.url} alt="product" />
              <div className="item_details">
                <h3>{c.prod.title.longTitle}</h3>
                <h3 style={{ margin: "-20px 0px 8px" }}>
                  {c.prod.title.shortTitle}
                </h3>
                <h3 className="diffrentprice ">₹{c.amount}</h3>
                <p className="unusuall">Usually dispatched in 8 days.</p>
                <p style={{ margin: "12px 0px" }}>Eligible for FREE Shipping</p>
                <div style={{ display: "flex", gap: "10px",width:"160px",margin:"10px 0px" }}>
                  <button className="cart-btn" onClick={()=>handleAdd(c.prod)}>+</button>
                  <p>Quantity: {c.quantity}</p>
                  <button className="cart-btn" onClick={()=>handleRemove(c.prod)}>-</button>
                </div>
                <img
                  src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                  alt="logo"
                />
                {/* <Option /> */}
              </div>
              <h3 className="item_price">₹{c.amount}</h3>
            </div>
          ))}
          <Divider />
          <SubTotal />
        </div>
        <RightPart />
      </div>
    </div>
  );
};

export default Cart;
