import Header from "../Components/Header";
import Table_cart from "../Components/Table";
import Nav from "../Components/Nav";
import './home.css';
function Home(){
    return(
        <div className="home_container">
            <Header />
            <Nav/>
            <div className="main">
             <Table_cart/>
            </div>
        </div>
    )
};
export default Home;