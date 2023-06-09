import React from "react";
import "./SideBar.css";
import { Avatar } from "@material-ui/core";

function SideBar() {
  const recentItem=(topic)=>(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Ankit Singh</h2>
        <h4>ankitssingh1912@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed you</p>
          <p className="sidebar__statNumber">2,500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,443</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('reactnative')}
        {recentItem('HTML')}
        {recentItem('Css')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default SideBar;
