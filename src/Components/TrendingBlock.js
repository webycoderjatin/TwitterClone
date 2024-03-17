import React from 'react';

export default function TrendingBlock(props) {
  return (
    <div className='trend_block'>
      <div className="trend_left">
        <p>{props.categ} · Trending</p>
        <h3>#{props.hashtag}</h3>
        <p>{props.posts} posts</p>
      </div>
      •••
    </div>
  );
}
