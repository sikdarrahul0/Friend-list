import React from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './Components/FriendList/FriendList';
import { useState } from 'react';
import { useEffect } from 'react';
import FriendCount from './Components/FriendCount/FriendCount';

function App() {
  const [friends, setFriends] = useState([]);
  const [count, setCount] = useState([]);
 
  const addFriend = (friend)=> {
    const newCount = [...count,friend];
    setCount(newCount);
  }

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
      .then(response => response.json())
      .then(data => setFriends(data.results))
  },[])

  return (
   <div className="App">
    <h1>People you may know</h1>
    <div className="friend-box">
     <div className="friend-box2">
        { 
        friends.map(data => (<FriendList addFriend={addFriend} data={data}></FriendList>))
        }
     </div>
     <div className="addlist">
        <FriendCount count={count}></FriendCount>
    </div>
    </div>
    </div>
  );
}

export default App;
