import React from "react";
import "./widgets.css";
import {Button } from '@material-ui/core';
import {
    TwitterTimelineEmbed,
  } from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
function Widgets(){
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className=" widgets_icon"/>
                <input className="in" placeholder="Search Twitter" type="text"/>
            </div>
                <div className="widgets_container">
                    <h2>What's happening</h2>
                    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">But surely confidence and momentum is the most important thing?</p>&mdash; Louis Tomlinson (@Louis_Tomlinson) <a href="https://twitter.com/Louis_Tomlinson/status/1407304700198899715?ref_src=twsrc%5Etfw">June 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Happiest birthday to my favourite costar! I’m such a huge fan of his immense talent! <a href="https://twitter.com/hashtag/HappyBirthdayThalapathyVijay?src=hash&amp;ref_src=twsrc%5Etfw">#HappyBirthdayThalapathyVijay</a> <a href="https://twitter.com/actorvijay?ref_src=twsrc%5Etfw">@actorvijay</a> 😍❤️🎉</p>&mdash; Kajal Aggarwal (@MsKajalAggarwal) <a href="https://twitter.com/MsKajalAggarwal/status/1407187889834713088?ref_src=twsrc%5Etfw">June 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName=""
                        options={{height: 400}}
                        />
                </div>
                <div className="widgets_container">
                <h2>Topics to follow</h2>
                    <div className="w">
                        <h4> CRICKET </h4>
                        <h5> Sport   </h5>
                        <Button className="Button">Follow</Button>
                        <ClearIcon className="widgets_icon1"/>
                    </div>
                    <div className="w">
                        <h4> SPORTS </h4>
                        <h5> All about sports  </h5>
                        <Button className="Button">Follow</Button>
                        <ClearIcon className="widgets_icon1"/>
                    </div>
                    <div className="w">
                        <h4> FUNNY TWEETS </h4>
                        <h5> Tweets making people <br/> laugh </h5>
                        <Button className="Button1">Follow</Button>
                        <ClearIcon className="widgets_icon2"/>
                    </div>
                    <p className="p">Show more </p>
                </div>
        </div>
    )
}

export default Widgets;
