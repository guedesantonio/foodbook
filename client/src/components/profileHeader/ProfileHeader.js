import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';

class ProfileHeader extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
  render() {
    const { user } = this.props.auth;
    return (
        <div>
            <div className="row">
                <div className="col s12 center-align">
                    <img className="profileImage" src="https://avatars0.githubusercontent.com/u/65220293?s=460&u=74c60e59640854e8f9d2734b4a3a441ae0853c73&v=4" alt="Avatar"/>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center-align">
                    <button
                        style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                        backgroundColor:"#3C5A98",
                        color:"white",
                    
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable accent-3"
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center-align">
                    <Card style={{backgroundColor:"#3C5A98", color:"white"}}>
                        <CardBody>
                            <CardTitle>{user.name}</CardTitle>
                            <CardSubtitle>Chef</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                    <p>{JSON.stringify(user)}</p>
                </div>
            </div>
        </div>        
    );
  }
}
ProfileHeader.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ProfileHeader);
