import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import ReactPlayer from 'react-player'

function Grok() {
  return (
    <div className="grok">

    <div className='grok_top_bar'>
      <IoArrowBackOutline className='icon_list'/>
      <p>Fun mode</p>
    </div>
    <div className="grok_bottom">
      <ReactPlayer url='https://abs.twimg.com/sticky/videos/inapp_light_square_v4.mp4' width='300px' height='70%' playing={true} loop={true}/>
      <h1>Grok Something</h1>
      <p className='gray'>Premium+ subscribers can now use our most advanced AI, Grok, on X.</p>
      <button className='black_btn'>Subscribe Now</button>
    </div>
    </div>
  );
}

export default Grok;
