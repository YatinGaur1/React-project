import { useSelector } from "react-redux";

const BagSummary = () => {
  
  const bagitemIds=useSelector(store=>store.bag);
  const CONVENIENCE_FEES=99;
  const totalitems = useSelector((store) => store.items);

  const finalitems = totalitems.filter((item) => {
    const itemIndex = bagitemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  let totalItem = finalitems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalitems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
 

  return (
    <div className="bag-summary">
      <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS {totalItem} Items </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">₹{totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">₹99</span>
        </div>
        <hr />
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
