import React, { Component  } from "react";
import ProfileHeader from "../profileHeader/ProfileHeader";
import ProfileTab from "../profileTab/ProfileTab";
import SearchList from "../searchList/SearchList";

class Dashboard extends Component {
  
render() {
return (
      <div style={{ height: "75vh" }} className="container ">
        <ProfileHeader/>
        <ProfileTab/>
        <SearchList/>
      </div>
    );
  }
}

export default Dashboard;