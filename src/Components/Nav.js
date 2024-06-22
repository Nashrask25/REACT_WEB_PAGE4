import "./nav.css";
import { Link,useNavigate } from "react-router-dom";
function Nav() {
  const navigate= useNavigate()
  return (
    <div className="nav_container">
      <div className="nav">
        <Link to="/"id="active">CARTS</Link>
        <Link to="/page404">FAVOURITE</Link>
      </div>
      <div className="active_nav">
        <div className="carts">
          <Link to="/">Active carts</Link>
          <Link to="/page404">Archived carts</Link>
        </div>
        <div className="filter">
          <div className="search">
            <input type="text" placeholder="Search"></input>
            <img src={"./img/search.png"}></img>
          </div>
          <div className="filter_search">
            <img src={"./img/filter.png"}></img>
            <button onClick={()=>navigate("/new_order")}>Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
