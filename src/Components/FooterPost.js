import React from 'react';
import { FaRegComment } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";

export default function FooterPost() {
  return (
    <div className='footer'>
      <span style={{display:"flex",justifyContent:"center",alignItems:"center"}}><FaRegComment className='comment_i' style={{paddingRight:"3px"}}/>11</span>
      <span style={{display:"flex",justifyContent:"center",alignItems:"center"}}><FiRepeat  style={{transform:"rotate(90deg)",paddingRight:"3px"}}/>5</span>
      <span style={{display:"flex",justifyContent:"center",alignItems:"center"}}><IoMdHeartEmpty style={{paddingRight:"3px"}}/>7578</span>
      <span style={{display:"flex",justifyContent:"center",alignItems:"center"}}><IoStatsChart style={{paddingRight:"3px"}}/>3005</span>
    </div>
  );
}
