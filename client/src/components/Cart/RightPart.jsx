import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useSelector } from 'react-redux';
const RightPart = () => {
    const total = useSelector(state=>state.cart.totalPrice)
  return (
    <div className="right_buy">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery. <br />
                    <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
                <h3>Subtotal (1 item ): <span style={{ fontWeight: "700" }}> ₹{total}.00</span></h3>
                <button className="rightbuy_btn"  >Proceed to Buy</button>
                <div className="emi">
                    Emi available
                    {/* {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
                    {true ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                </div>
                {/* <span className={val ? "show" : "hide"}> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, */}
                <span className="hide"> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold,
                    Jewelry, Gift cards and Amazon pay balance top up). Learn more</span>
            </div>
        </div>
  )
}

export default RightPart