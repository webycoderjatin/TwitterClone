import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
import { MdGif } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";


export default function PostInput(props) {
  return (
    <div className='flex_post'>
      <div className="pic">
        <img src={props.profile} alt=""/>
      </div>
      <div className="center_post">
        <textarea cols="35" rows="1" placeholder='What is happening?!'></textarea>
        <hr style={{marginTop:"20px"}}/>
        <div className="icons">
          <FaRegCirclePlay className='icon'/>
          <TbPhoto className='icon'/>
          <span className="icon_g"><MdGif className='gif icon'/></span>
          <RiListRadio className='icon'/>
          <BsEmojiSmile className='icon'/>
          <TbCalendarTime className='icon'/>
          <IoLocationOutline className='icon'/>
          <button className='post_button post_btn disable_btn' style={{padding:"10px 20px"}}>Post</button>
        </div>
      </div>
    </div>
  );
}
