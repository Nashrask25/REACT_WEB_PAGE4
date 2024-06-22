import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import './new_door.css';
function New_door() {
    const navigate = useNavigate()
    return (
        <div className="new_door">
        <Header/>
        <div className="nav_two">
                <div className="back">
                    <button onClick={()=>navigate("/new_order")}><img src={'./img/nav-back.png'}></img></button>
                    <h2>Configure a new door</h2>
                    <h3>2 of 3</h3>
                </div>
                <img src={'./img/nav-menu.png'}></img>
        </div>
        
        <div className="inner_door_container">
        <div className="container-one">
            <div className="list">
            <div class="input">
                <label for="inputState" class="form-label">
                Select Category
                </label>
                <select id="inputState" class="form-select">
                <option selected>Residential Door</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
                </select>
            </div>
            <div class="input">
                <label for="inputState" class="form-label">
                Select Series
                </label>
                <select id="inputState" class="form-select">
                <option selected>Canyon Ridge® Collection</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
                </select>
            </div>
            <div class="input">
                <label for="inputState" class="form-label">
                Door Type
                </label>
                <select id="inputState" class="form-select">
                <option selected>CAN212</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
                </select>
            </div>
            </div>
            </div>
            <div className="container-two">
                    <div className="configure">
                        <button onClick={()=>navigate("/configure_door")}>CONFIGURE</button>
                    </div>
                    
            </div>
        </div>
       </div> 
    );
}
export default New_door;