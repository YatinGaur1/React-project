import Fetchitem from "../component/fetchitem";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../component/LoadingSpinnger";

function App() {
  const fetchstatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <Fetchitem />
      {fetchstatus.currentlyfetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}
export default App;
