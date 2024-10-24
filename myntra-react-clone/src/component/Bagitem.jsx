import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
const Bagitem = ({ item }) => {
  const dispatch = useDispatch();
  const handleonremove = () => {
    dispatch(bagActions.removefrombag(item.id));
  };
  return (
    <div className="bag-items-container">
      <div class="item-left-part">
        <img class="bag-item-img" src={item.image} />
      </div>
      <div class="item-right-part">
        <div class="company">{item.company}</div>
        <div class="item-name">{item.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div class="return-period">
          <span class="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days"> {item.delivery_date}</span>
        </div>
        <div class="remove-from-cart" onClick={handleonremove}>
    
        <RiDeleteBin6Fill />
        </div>
      </div>
    </div>
  );
};
export default Bagitem;
