import React from 'react';
import FooterPost from './FooterPost';

export default function Post(props) {
  return (
    <div className='post'>
      <div className="header">
        <div className="pic">
          <img src={props.profile} alt="" />
        </div>
        <div className="info">
            <div className="name">{props.name}</div>
            <div className="caption">{props.caption}</div>
        </div>
        <div className="username">{props.username}</div>
        <div className="time">{props.time}</div>
      </div>
      <div className="media">
        <img src={require("../Assets/musk.jpg")} alt="musk" />
      </div>
      <div className="footer">
          <FooterPost/>
      </div>
    </div>
  );
}
