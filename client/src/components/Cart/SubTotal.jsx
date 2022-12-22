import {useSelector} from "react-redux"
const SubTotal = () => {
  const total = useSelector(state=>state.cart.totalPrice)
  return (
    <div className="sub_item">
            <h3>Subtotal (1 item):<strong style={{ fontWeight: "700", color: "#111" }}> ₹{total}.00</strong></h3>
        </div>
  )
}

export default SubTotal