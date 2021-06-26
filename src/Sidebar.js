import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SideBarOption from "./SiderBarOption";
import { Button } from "@material-ui/core";
function SideBar(){
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_icon" />

            <SideBarOption active Icon={HomeIcon} text ="Home" />
            <SideBarOption Icon={SearchIcon} text = "Explore"/>
            <SideBarOption Icon={NotificationImportantIcon} text = "Notifications"/>
            <SideBarOption Icon={EmailOutlinedIcon} text = "Messages"/>
            <SideBarOption Icon={BookmarkBorderOutlinedIcon} text = "Bookmarks"/>
            <SideBarOption Icon={FeaturedPlayListOutlinedIcon} text = "Lists"/>
            <SideBarOption Icon={PermIdentityOutlinedIcon} text = "Profile"/>
            <SideBarOption Icon={MoreHorizOutlinedIcon} text = "More"/>

            {/* Button -> tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    );
}

export default SideBar;