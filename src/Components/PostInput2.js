import React from 'react';
import './PostInput.css'; // Import your CSS file
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
import { MdGif } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

const PostInput2 = () => {
  return (
    <div className="post-input">
      <div className="user-info">
        <img src="avatar.png" alt="User Avatar" />
        <input type="text" placeholder="What is happening?!" />
      </div>
      <div className="actions">
        <button><span><FaRegCirclePlay/></span></button>
          <button><span><TbPhoto/></span></button>
          <button><span><MdGif/></span></button>
          <button><span><RiListRadio/></span></button>
          <button><span><BsEmojiSmile/></span></button>
          <button><span><TbCalendarTime/></span></button>
          <button><span><IoLocationOutline/></span></button>
      </div>
      <button className="post-button">Post</button>
    </div>
  );
}

export default PostInput2;
