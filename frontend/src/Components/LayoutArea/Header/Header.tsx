import { NavLink } from "react-router-dom";
import "./Header.css";

import hexagon from "../../../Assets/Images/hexagon.png"

function Header(): JSX.Element {
    return (
        <div className="Header">
			

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <NavLink className={"nav"} to="/home"><h1><img  className="img-fluid" src={hexagon} alt="diamond" style={{height:"40px",width:"40px"}}/> Workspace</h1></NavLink>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className={"nav"} to="/home">HOME</NavLink>

        </li>
        <li className="nav-item">
        <NavLink  className={"nav"} to="/meetings">MEETINGS</NavLink>
        </li>
        <li>
        <NavLink className={"nav"} to="/add_meeting">ADD MEETING</NavLink>

        </li>
        </ul>
        </div>
        </div>
        </nav>
        </div>
    );
}

export default Header;
