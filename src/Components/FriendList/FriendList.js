import React from 'react';
import './FiendList.css';

const FriendList = (props) => {
   const friend = props.data;
   const {email, gender, phone} = friend;
   const {title, first, last} = friend.name;
   const name = `${title} ${first} ${last}`;
   const imgUrl = friend.picture.large;
    return (
        <div className="friend-list">
            <div className="img-div">
              <img className="friend-img" src={imgUrl} alt=""/>
            </div>
            <div>
            <h4>Name : {name}</h4>
            <p>Gender: {gender}</p>
            <p>Email: {email} </p>
            <p>Mobile No: {phone}</p>
            <button className="addbtn" onClick={()=> props.addFriend(friend)}>Add Friend</button>
            </div> 
        </div>
    );
};

export default FriendList;