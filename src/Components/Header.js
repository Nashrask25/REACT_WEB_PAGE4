import './header.css'
function Header() {
    return (
      <div className="container_header">
        <img src={'favicon.ico'}></img>
        <ul>
        <li><img src={'./img/menu.png'}></img></li>
        <li><img src={'./img/alert.png'}></img></li>
        <li><img src={'./img/help.png'}></img></li>
        <li><img src={'./img/user.png'}></img></li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  