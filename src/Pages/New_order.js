import Header from "../Components/Header";
import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import './new_order.css';
function New_order() {
    const navigate = useNavigate()
    return (
    
      <div className="new_order_container">
        <Header/>
        <div className="nav_one">
                <div className="back">
                    <button onClick={()=>navigate("/")}><img src={'./img/nav-back.png'}></img></button>
                    <h2>Create a new order</h2>
                </div>
                <img src={'./img/nav-menu.png'}></img>
        </div>

        <div className="new_order">
            <div className="option_one">
                <div className="configure_door">
                    <h1>Configure your door from scratch</h1>
                    <h2>Residential,Commercial,Entry doors</h2>
                </div>
                <button onClick={()=>navigate("/new_door")}><img src={'./img/forward.png'}></img></button>
            </div>

            <div className="option_two">
                <div className="configure_door">
                    <h1>Parts / Openers</h1>
                    <h2>Order Parts and Openers</h2>
                </div>
                <button><img src={'./img/forward.png'}></img></button>
            </div>

            <div className="option_three">
                <div className="configure_door">
                    <h1>Direct Item Entry</h1>
                    <h2>Order Parts / Openers using a Product ID</h2>
                </div>
                <button><img src={'./img/forward.png'}></img></button>
            </div>

            <div className="option_four">
                <div className="configure_door">
                    <h1>Choose from favourites</h1>
                    <h2>Re-order door from your favourites</h2>
                </div>
                <button><img src={'./img/forward.png'}></img></button>
            </div>

        </div>
        
      </div>
    );
  }
  
  export default New_order;
  