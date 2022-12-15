import "./ProductList.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NavImg from "../../assets/nav.jpg"
const ProductList = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p> All</p>
          <p>Mobiles</p>
          <p>Best Sellers</p>
          <p>Fashion</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src={NavImg} alt="navimg" />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
