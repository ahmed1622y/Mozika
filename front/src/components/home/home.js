import Header from "../header/header";
import Sidebar from "../header/asidebar";
import "./home.css";
const Home = () => {
  return (
    <div className="HomeCont">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>

        <div className="col-10">
          <Header />
        </div>
      </div>
    </div>
  );
};
export default Home;
