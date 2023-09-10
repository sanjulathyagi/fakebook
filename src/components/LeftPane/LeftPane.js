import React from "react";
import "./leftPane.css";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import GroupIcon from "@mui/icons-material/Group";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FlagIcon from "@mui/icons-material/Flag";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BuildIcon from "@mui/icons-material/Build";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function LeftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <MarkUnreadChatAltIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className="leftPaneMenuItem">
            <GroupIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Groups</span>
          </li>
          <li className="leftPaneMenuItem">
            <RssFeedIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Feed</span>
          </li>
          <li className="leftPaneMenuItem">
            <FlagIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Pages</span>
          </li>
          <li className="leftPaneMenuItem">
            <CalendarMonthIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Events</span>
          </li>
          <li className="leftPaneMenuItem">
            <BuildIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Settings</span>
          </li>
          <li className="leftPaneMenuItem">
            <SportsEsportsIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Games</span>
          </li>
          <li className="leftPaneMenuItem">
            <NewspaperIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuItem">
            <WorkOutlineIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">jobs</span>
          </li>
          <li className="leftPaneMenuItem">
            <AddShoppingCartIcon className="LeftPaneMenuIcon" />
            <span className="leftPaneMenuText">Market</span>
          </li>
          <hr />
          <div className="pagesYouLiked">
            <h1>Pages You Liked</h1>
          </div>
          <div className="pageList">
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li><li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Sanjula Athauda</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
