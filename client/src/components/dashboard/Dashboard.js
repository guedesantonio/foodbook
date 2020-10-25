import React, { Component  } from "react";
import ProfileHeader from "../profileHeader/ProfileHeader";
import ProfileTab from "../profileTab/ProfileTab";


class Dashboard extends Component {
  
render() {
return (
      <div style={{ height: "75vh"}} className="container ">
        <ProfileHeader/>
        <ProfileTab/>
      </div>
    );
  }
}

export default Dashboard;