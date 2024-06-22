import "./App.css";
import New_order from "./Pages/New_order";
import New_door from "./Pages/New_door";
import Configure_door from "./Pages/Configure_door";
import Place_order from "./Pages/Place_order";
import { BrowserRouter, Router, Link,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Page404 from "./Page404";

function App() {
  return (
    <div className="App">
        {/* <Home/> */}
     <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/place_order" element={<Place_order />}/>
        <Route path="/new_order" element={<New_order />}/>
        <Route path="/new_door" element={<New_door />}/>
        <Route path="/configure_door" element={<Configure_door/>}/>
        <Route path="/*" element={<Page404/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
