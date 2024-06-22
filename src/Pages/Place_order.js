import Header from "../Components/Header";
import "./place_order.css";
import { useNavigate } from "react-router-dom";
function Place_order() {
    const navigate = useNavigate()

  return (
    <div className="place_order_container">
      <Header />
      <div className="nav_two">
        <div className="back">
          <button onClick={() => navigate("/configure_door")}>
            <img src={"./img/nav-back.png"}></img>
          </button>
          <h2>Classic_Jhon45012</h2>
          <h3>Cart#123456723</h3>
        </div>
        <img src={"./img/nav-menu.png"}></img>
      </div>
      <div className="main_container">
        <div className="one_container">
          <h1>
            10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE,
            5TH GENERATION FINISH WALDER DOOR
          </h1>
          <h3>Job Name: Front door with glass </h3>
          <h3>Product #CWD • Garage Door</h3>
          <h3>Change Availability: IN STOCK (Available for Pickup)</h3>
            <div className="inner1_one">
                <div className="add_product">
                    <button>-</button>
                    <button id="number">1</button>
                    <button>+</button>
                </div>
                <div className="coupon">
                    <h1>Standard Multiplier: .432 
                        Secondary Multipliers Applied</h1>
                    <div className="img">
                        <img src={'./img/coupon.png'}/>
                        <h2>Apply MPQ</h2>
                    </div>
                </div>
                <div className="price_details">
                    <h1>Net Price: $4500.00 Unit Price: $4800.00</h1>
                    <h2>View Price Details</h2>
                </div>
          </div>
          <div className="inner1_two">
            <button><img src={'./img/favourite.png'}/> FAVORITES</button>
            <button onClick={() => navigate("/configure_door")}><img src={'./img/edit.png'}/> EDIT</button>
            <button><img src={'./img/copy.png'}/> COPY</button>
            <button onClick={() => navigate("/")}><img src={'./img/delete.png'}/> DELETE</button>
          </div>
        </div>
        <div className="two_container">
          <div className="inner2_one">
            <div className="date">
              <h3>Change Delivery Date</h3>
              <input type="text" placeholder="Example: 31-DEC-1999"></input>
              <h3>Standard Delivery: Tue May 28 - 2019</h3>
            </div>
            <div className="order_no">
              <h3>Purchase Order Number</h3>
              <input type="text" placeholder="Enter PO Number"></input>
              <h3>This PO will be useful to track this order items </h3>
            </div>
          </div>
          <div className="inner2_two">
            <div className="bill">
              <h4>Bill Summary</h4>
              <div className="sub_total">
                <h4>Sub Total</h4>
                <h5>$4500.00</h5>
              </div>
              <div className="energy">
                <h4>Energy Surcharge</h4>
                <h5>$70.18</h5>
              </div>
              <div className="tax">
                <h4>Sales Tax</h4>
                <h5>$490.93</h5>
              </div>
              <div className="total">
                <h4>Total</h4>
                <h5>$5061.11</h5>
              </div>
            </div>
          
            <img src={"./img/tax_line.png"}></img>
          <div className="inner2_three">
              <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Apply Tax
                    </label>
                  </div>
              <h4>
                (The 1% iStore discount is calculated into the total price for
                all doors and door parts. Please refer to the quote or order
                acknowledgment for details.)
              </h4>
          </div>
          </div>  
        </div>
        <div className="three_container">
          <div className="inner3_one">
            <h1>Billing To</h1>
            <h1>Shipping To</h1>
          </div>
          <div className="inner3_two">
            <div className="billing">
              <h2>Bement Jared</h2>
              <h3>144 Curt Shores, 50, Madison Avenue Hixson - 42040</h3>
              <h3>Contact: (123) 456 7890</h3>
            </div>
            <button>CHANGE</button>
            <img src={"./img/vertical_line.png"}></img>
            <div className="shipping">
              <h2>Bement Jared</h2>
              <h3>144 Curt Shores, 50, Madison Avenue Hixson - 42040</h3>
              <h3>Contact: (123) 456 7890</h3>
            </div>
            <button>CHANGE</button>
          </div>
        </div>
        <div className="four_container">
          <div className="inner4_one">
            <h2>1 Item</h2>
            <h3>$5061.11</h3>
          </div>
          <div className="inner4_two">
            <button id="outline" onClick={() => navigate("/new_order")}><img src={'./img/add_more.png'}/> ADD MORE</button>
            <button onClick={() => navigate("/")}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Place_order;
