import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

export default function Search(props) {
  return (
    <div className='search'>
        <IoSearchOutline className='icon_search'/>
      <input type="text" placeholder={props.placeholder}/>
    </div>
  );
}
