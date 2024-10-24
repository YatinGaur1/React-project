import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

const Homeitem = ({ item }) => {
  const dispatch = useDispatch();

  const bagitems = useSelector((store) => store.bag);
  const elementfound = bagitems.indexOf(item.id)>=0;

  const handleonadd = () => {
    dispatch(bagActions.addtobag(item.id));
  };
  
  const handleonremove=()=>{
    dispatch(bagActions.removefrombag(item.id))
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
       
      {elementfound ?  (
        <button
          type="button"
          class="btn  btn-add-bag btn-danger" onClick={handleonremove}
        >
          Remove from cart
        </button>
      ) :(
        <button
          type="button"
          class="btn btn-add-bag btn-success"
          onClick={handleonadd}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};
export default Homeitem;
