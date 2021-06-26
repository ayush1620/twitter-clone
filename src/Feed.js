import React from "react";
import TweetBox from "./TweetBox";
import Posts from "./Posts.js"
import "./feed.css";
function Feed(){
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Posts/>
        </div>
    )
}

export default Feed;
