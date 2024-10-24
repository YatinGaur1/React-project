import { useSelector } from "react-redux";
import Bagitem from "../component/Bagitem";
import BagSummary from "../component/BagSummary";
import CartMessage from "../component/CartMessage";

const Bag = () => {
  const bagitems = useSelector((store) => store.bag);

  const totalitems = useSelector((store) => store.items);

  const finalitems = totalitems.filter((item) => {
    const itemIndex = bagitems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          {finalitems.map((item) => {
            return (
              <>
                <Bagitem key={item.id} item={item} /> 
              
              </>
            );
          })}
            {bagitems.length!=0?<BagSummary/>:<CartMessage/>}
        </div>
      </main>
    </>
  );
};
export default Bag;
