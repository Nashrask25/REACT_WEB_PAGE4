import Header from "../Components/Header";
import Progress_bar from "../Components/Progress_bar";
import { propTypes } from "react-bootstrap/esm/Image";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./configure_door.css";
function Configure_door() {
  const [percent, setPercent]=useState(0); 
  function updatePercent()
  {
    setPercent(percent+25);
  }
const navigate = useNavigate();
  return (
    <div className="configure_door_container">
      <Header />
      <div className="nav_three">
        <div className="back">
          <button onClick={() => navigate("/new_door")}>
            <img src={"./img/nav-back.png"}></img>
          </button>
          <h2>Configure a new door</h2>
          <h3>2 of 3</h3>
        </div>
        <img src={"./img/nav-menu.png"}></img>
      </div>
      <Progress_bar progress={25+percent}/>
      <div className="main_container">
        <div className="layout">
          <h1>Layout Options</h1>
          <div className="inner_layout">
            <div class="input">
              <label for="inputState" class="form-label">
                Assembly Type
              </label>
              <select id="inputState" class="form-select">
                <option selected>Complete Door</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label>Measure Size</label>
              <div className="input_size">
                <div class="width">
                  <label>Width</label>
                  <select id="inputwidth" class="form-select">
                    <option selected>8 ft.</option>
                    <option>Complete Bed</option>
                    <option>Complete Sofa</option>
                  </select>
                  <select id="inputwidth" class="form-select">
                    <option selected>2 in.</option>
                    <option>Complete Bed</option>
                    <option>Complete Sofa</option>
                  </select>
                </div>
                <div class="height">
                  <label>Height</label>
                  <select id="inputheight" class="form-select">
                    <option selected>6 ft.</option>
                    <option>Complete Bed</option>
                    <option>Complete Sofa</option>
                  </select>
                  <select id="inputheight" class="form-select">
                    <option selected>0 in.</option>
                    <option>Complete Bed</option>
                    <option>Complete Sofa</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                WindCode
              </label>
              <select id="inputState" class="form-select">
                <option selected>WindCode W1</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Design
              </label>
              <select id="inputState" class="form-select">
                <option selected>CC</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Color
              </label>
              <select id="inputState" class="form-select" onClick={updatePercent}>
                <option>Dark Finish</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
          </div>
        </div>
        <div className="window">
          <h1>Window Options</h1>
          <div className="inner_window">
            <div class="input">
              <label for="inputState" class="form-label">
                Glass Type
              </label>
              <select id="inputState" class="form-select">
                <option selected>Solid (No Windows)</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Section(s) Glazed
              </label>
              <select id="inputState" class="form-select">
                <option selected>Sections 4</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Framing
              </label>
              <select onClick={updatePercent} id="inputState" class="form-select">
                <option selected>Arch 1 Design</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
          </div>
        </div>
        <div className="track">
          <h1>Track Options</h1>
          <div className="inner_track">
            <div class="input">
              <label for="inputState" class="form-label">
                Spring
              </label>
              <select id="inputState" class="form-select">
                <option selected>Galvanized Torsion</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Track Size
              </label>
              <select id="inputState" class="form-select">
                <option selected>2” Flag & Jamb Brackets Loose</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Track Mount
              </label>
              <select id="inputState" class="form-select">
                <option selected>Bracket</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Track Lift
              </label>
              <select id="inputState" class="form-select">
                <option selected>Standard</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Track Radius
              </label>
              <select id="inputState" class="form-select" onClick={updatePercent}>
                <option selected>12” Radius</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
          </div>
        </div>
        <div className="other">
          <h1>Other Options</h1>
          <div className="inner_other">
            <div class="input">
              <label for="inputState" class="form-label">
                Lock
              </label>
              <select id="inputState" class="form-select">
                <option selected>Inside Slide Lock (#2)</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input">
              <label class="form-check-label" for="flexRadioDefault1">
                MISC Lock Options
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <a>No Lock Hole</a>
              </div>
            </div>
            <div class="input">
              <label for="inputState" class="form-label">
                Packaging
              </label>
              <select id="inputState" class="form-select">
                <option selected>[x] Distributor</option>
                <option>Complete Bed</option>
                <option>Complete Sofa</option>
              </select>
            </div>
            <div class="input-check-box">
              <label class="form-check-label" for="gridCheck">
                Additional Options
              </label>
              <div className="checkbox_container">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Extra Strut(s)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Spade Strap Hinge(s)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    14 GA Quiet Hinge
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Less Bottom Astragal
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Gold Bar Gurantee ( Select Dealers )
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Medallion Hardware Upgrade
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Light Seal Kit
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Slide Lock Mounted at 54”
                  </label>
                </div>
                <div class="form-check">
                  <input
                    onClick={updatePercent}
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    2 Spear Lift Handles
                  </label>
                </div>
              </div>

              <div class="inputbox">
                <select id="inputbox" class="form-select">
                  <option selected>5 Extra Struts</option>
                  <option>Complete Bed</option>
                  <option>Complete Sofa</option>
                </select>
              </div>
            </div>
          </div>
          <div className="add_to_cart">
            <button id="btn-one" onClick={() => navigate("/new_door")}>
              PREVIEW
            </button>
            <button onClick={() => navigate("/place_order")}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Configure_door;
