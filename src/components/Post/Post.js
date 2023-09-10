import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="images/2.jpg" alt="" className="postImage" /> 
                <span className="postUserName">Sanjula Athauda</span>
                <span className="postTime">5 mins ago</span> 
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    hello i am sanjula i live in kegalle
                </div>
                <img src="/images/2.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.png" alt="" className="reactionPic" />
                    <img src="/images/love.png" alt="" className="reactionPic" />
                    <img src="/images/laughing.png" alt="" className="reactionPic" />
                    <span className="likeCount">sanjula athauda and 225 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="CommentCount">
                        15 comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
