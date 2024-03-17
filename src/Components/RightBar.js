import React from 'react';
import Search from './Search';
import Trending from './Trending';

export default function RightBar() {
  return (
    <div className='right_bar'>
      <Search placeholder="Search"/>
      <Trending/>
    </div>
  );
}
