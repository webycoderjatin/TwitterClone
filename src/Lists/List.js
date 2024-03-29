import React from 'react';
import Search from '../Components/Search';
import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Discover from './Discover';

export default function List() {

    

    return (
        <div className='center' style={{ marginTop: "5px" }}>
            <div className="topheader">
                <Link to="/" className="custom_link"><IoArrowBackOutline className='icon_list'/></Link>
                <Search placeholder="Search Lists"/>
                <span style={{display:"flex",gap:"10px"}}>
                    <MdOutlinePostAdd className='icon_list'/>
                <HiDotsHorizontal className='icon_list'/>
                </span>
            </div>
            <div className="pinned">
                <h2>Pinned Lists</h2>
                <div className="lists">
                    <p>Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
                </div>
            </div>
            <div className="dicover_new_list">
                <h2>Discover new lists</h2>
                <Discover thumb={require("./assets/punjab.jpg")} heading="Punjab Politics" member="37k"/>
                <Discover thumb={require("./assets/punjab.jpg")} heading="Punjab Politics" member="37k"/>
                <Discover thumb={require("./assets/punjab.jpg")} heading="Punjab Politics" member="37k"/>
                <p className='dodger'>Show more</p>
                
            </div>
            <div className="your_list">
                <h2>Your Lists</h2>
                <div className="yr_lists">
                    <p>You haven't created or followed any Lists. When you do, they'll show up here.</p>
                </div>
            </div>
        </div>
    );
}
