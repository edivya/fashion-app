import React from "react"
import "./style.css"
const Navbar =(props)=> {
    return(
        <div className="navbar">
<ul className="navbarMenu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Posts</a></li>
    <li><a href="#">Contct Us</a></li>
</ul>
<div className="search">
    <form>
    <input type="text" className="searchinput" placeholder="Search"/>
     <img src={require('../../assets/icons/search.png')} alt="Search"/>
    
    </form>
    
</div>
        </div>
    )
}
export default Navbar