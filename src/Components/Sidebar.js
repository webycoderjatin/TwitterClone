import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { GrNotification } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom';

export default function Sidebar(props) {
    return (
        <div>
            <ul style={{ listStyle: "none", padding: '20px' }} className='sidebar'>
                <li><div className='icons_side'><BsTwitterX className='twitter_logo'/></div></li>
                <li><Link to="/" className='custom_link'><div className='icons_side'><MdHomeFilled /></div> <span>Home</span></Link></li>
                <li><div className='icons_side'><IoSearchSharp /></div> <span>Explore</span></li>
                <li><div className='icons_side'><GrNotification /></div> <span>Notifications</span></li>
                <li><div className='icons_side'><FaRegMessage /></div> <span>Messages</span></li>
                <li><Link to="/grok" className='custom_link'><div className='icons_side'><RxSlash style={{ border: "2px solid black", borderRadius: "5px" }} /></div> <span>Grok</span></Link></li>
                <li><Link to="/lists" className='custom_link'><div className='icons_side'><RiFileListLine /></div> <span>List</span></Link></li>
                <li><div className='icons_side'><BsPerson /></div> <span>Profile</span></li>
                <li><div className='icons_side'><CiCircleMore /></div> <span>More</span></li>
                <button className='post_button'>Post</button>
                <div class="profile">
                    <div class="avatar"><img src={props.profile} alt="" /></div>
                    <div class="info">
                        <p class="name"><strong>Jatin Rai</strong></p>
                        <p class="handle">@JatinRa54921319</p>
                    </div>
                    <div class="options">•••</div>
                </div>
            </ul>
            
        </div>
    );
}
