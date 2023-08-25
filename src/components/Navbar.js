import React, { Component } from "react";
import { ReactDOM } from "react";
import './NavbarStyles.css';
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

class Navbar extends Component{
    state={clicked:false};
    
      handleClick=()=>{
            this.setState({clicked:!this.state.clicked})
        }
    
    render(){
        return(
            <nav className="navbaritem">
                <h1 className="navbar-logo">EduVilla</h1>
               
               <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
               </div>
               
                <ul className={this.state.clicked? "nav-menu active":"nav-menu"}>
                {MenuItem.map((item,index)=> {
                    return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}</Link>
                    </li>
                    );
                }) 
                }
                <a href="/signup"> 
                <button>Sign Up</button>
                </a>
                <a href="/login">
               <button>login</button>
               </a>
                </ul>   
            </nav>
        );
        }
    }
       
    
    export default Navbar;
