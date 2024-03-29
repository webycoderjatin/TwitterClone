import React from 'react';
import PostInput from './PostInput';
import PostInput2 from './PostInput2';
import Post from './Post';
import TopBar from './TopBar';

export default function Center() {
  const elements = [];

  // Use a for loop to add the component 10 times to the elements array
  for (let i = 0; i < 10; i++) {
    elements.push(<Post key={i} name="Elon Musk" caption="Fixed it" username="@elonmusk" time="16h" profile={require("../Assets/profile.jpg")}/>);
  }
  return (
    <div className='center'>
      <TopBar/>
      <PostInput profile={require("../Assets/profile.jpg")}/>
      {elements}
      {/* <Post  name="Elon Musk" caption="Fixed it" username="@elonmusk" time="16h"/> */}
    </div>
  );
}
