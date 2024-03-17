import React from 'react';
import { IoIosAddCircle } from "react-icons/io";

function Discover(props) {
    return (
        <div className='discover'>
            <span className="left"><img src={props.thumb} alt="" className="thumbnail" />
            <div className="content">
                <span className="top">
                    <h4>{props.heading}</h4>
                    •
                    <p>{props.member}</p>
                </span>
                <span className="bottom">
                    
                    <span className="imgs">
                        <img src={require("./assets/punjab_small.jpg")} alt="" />
                        <img src={require("./assets/punjab_small2.jpg")} alt="" />
                        <img src={require("./assets/punjab_small3.jpg")} alt="" />
                    </span>
                    <p>4.7k followers including @username</p>
                </span>
            </div></span>
            <span className="right">
            <IoIosAddCircle className='add_icon'/>

            </span>
            
        </div>
    );
}

export default Discover;
