import {Button } from '@material-ui/core';
import React from 'react';
import "./TweetBox.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TweetBox(){
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <AccountCircleIcon className="tweetBox_icon"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox_image" placeholder="Enter image URL(optional)" type="text"/>
                <Button className="tweetBox__Button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;