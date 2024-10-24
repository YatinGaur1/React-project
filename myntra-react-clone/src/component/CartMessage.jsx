import { Link } from "react-router-dom";
const CartMessage = () => {
  return (
    <center>
      <span
        class="badge rounded-pill text-bg-warning info"
        style={{ "line-height": " 30px", "font-size": "20px" }}
      >
        <Link className="cartmessage" to="/">
          Add items to cart
        </Link>
      </span>
    </center>
  );
};
export default CartMessage;
