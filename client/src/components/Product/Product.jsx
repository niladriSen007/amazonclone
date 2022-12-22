import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import "./Product.scss";
import { useTime } from 'react-timer-hook';
import { useParams } from "react-router";
import { publicRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";


const Cart = () => {



  const [product,setProduct] = useState({
    url:"",
    title:{
      shortTitle:"",
      longTitle:"",
    },
    price: {
      mrp: 0,
      cost: 0,
      discount: ''
  },
  description:"",
  
  })

  const params = useParams()
  // console.log(params.id)
  const productId = params.id;

  const {
    seconds,
    minutes,
    hours,
  } = useTime({ format: '12-hour'});


  // console.log(productId)


  useEffect(()=>{
    const getProduct = async()=>{
      const prod = await publicRequest.get(`/products/product/${productId}`)
      setProduct(prod.data)
      // console.log(prod.data)
    }
    getProduct()
  },[])


  const dispatch = useDispatch()
const handleAddCart = (prod) =>{
  dispatch(addProduct({product:prod,amount:prod.price.mrp,quantity:1}))
  // console.log(prod)
}

  // console.log(product)

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src={product.url}
            alt="product"
          />
          <div className="cart_btn">
            <button className="cart_btn1" onClick={()=>handleAddCart(product)}>Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>{product.title.shortTitle}</h3>
          <h4>{product.title.longTitle}</h4>
          <Divider />
          <p className="mrp">M.R.P : ₹{product.price.mrp}</p>
          <p>
            Deal of the Day : <span style={{ color: "#B12704" }}>₹{product.price.cost}.00</span>
          </p>
          <p>
            You save : <span style={{ color: "#B12704" }}> ₹300 (15%) </span>
          </p>
          <div className="discount_box">
            <h5>
              Deal of the Day : <span style={{ color: "red" }}>{product.price.discount}</span>{" "}
            </h5>
            <h5>
            Ends in {24 - hours}h {60 - minutes}m {60 - seconds}s
            </h5>
            <h4>
              FREE Delivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                Jan 1 - 8
              </span>{" "}
              Details
            </h4>
            <p style={{ color: "#111" }}>
              Fastest delivery:{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                {" "}
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Item :{" "}
            <span
              style={{
                color: "#565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.1px",
              }}
            >
              {product.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
