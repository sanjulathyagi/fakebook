import React from 'react';
import "./rightPane.css";

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsored">Sponsored</span>
          <img src="/images/ad1.webp" alt="" className="adImage" />
          <span className="addText">
            Order your food now online through Food App delivery... lets! order your favorite food from home....
          </span>
        </div>
        <div className="birthdayContainer">
          <img src="/images/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Sanjula Athauda</b> and<b> 2 others</b> having birthday today....!
          </span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/girl.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Rachal Green</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/girl.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Rachal Green</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/girl.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Rachal Green</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/girl.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Rachal Green</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/girl.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Rachal Green</span>
          </li>
        </div>
      </div>


  
    </div>
  )
}
