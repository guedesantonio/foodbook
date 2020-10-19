import React, { Component  } from "react";
import ProfileHeader from "../profileHeader/ProfileHeader";

class Dashboard extends Component {
  
render() {
return (
      <div style={{ height: "75vh" }} className="container ">
        <ProfileHeader/>
      </div>
    );
  }
}

export default Dashboard;