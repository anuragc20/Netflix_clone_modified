import React, { Component } from 'react'
import "./Display.css"


 class DisplayUserDetails extends Component {
 
    
    render() {
        return (
            <div>
                <h1 className="Display-Details-setting">Details Of User:</h1>
               {localStorage.getItem("User") ? (
                <ul className="List-style ">
                            <li ><img className="image_size" src={JSON.parse(localStorage.getItem('User')).imageUrl||JSON.parse(localStorage.getItem('User')).Profile_Image}/></li>
                            <li>Name:{JSON.parse(localStorage.getItem('User')).name||JSON.parse(localStorage.getItem("User")).First_Name}</li>
                        <li>Email:{JSON.parse(localStorage.getItem('User')).email||JSON.parse(localStorage.getItem("User")).Email_User}</li>
                           
                     
                        </ul>):null} 
                
            </div>
        )
    }
}

export default DisplayUserDetails
