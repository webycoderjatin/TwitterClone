import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Center from './Components/Center';
import RightBar from './Components/RightBar';
import { Route, Routes } from 'react-router-dom';
import List from './Lists/List';
import Error from './Components/Error';
import Grok from './Components/Grok';


function App() {

  const profileImage = require("./Assets/profile.jpg")

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Sidebar profile={profileImage}/>

    <div>
      <Routes>
        <Route path='/' element={<Center/>}></Route>
        <Route path='/lists' element={<List/>}></Route>
        <Route path="/grok" element={<Grok/>}></Route>
        <Route path='*' element={<Error/>}></Route>   
      </Routes>

    </div>
      <RightBar />
    </div>
  );
}

export default App;
