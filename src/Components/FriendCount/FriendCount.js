import React from 'react';
import './FriendCount.css';
const FriendCount = (props) => {
    const friend = props.count;
    return (
        <div className="summary">
            <h3>Friend Summary</h3>
            <h5>Friend request recieved: {friend.length}</h5> 
            <ul>
                {
                    friend.map(frnd =>
                        {
                            const {title, first, last} = frnd.name;
                            const name = `${title} ${first} ${last}`;
                            return <li>{name}</li>
                        } )
                }
            </ul>
        </div>
    );
};

export default FriendCount;