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
                    <img 
                    className="profileImage" 
                    src="https://avatars0.githubusercontent.com/u/65220293?s=460&u=74c60e59640854e8f9d2734b4a3a441ae0853c73&v=4" 
                    alt="Avatar"/>
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
                            <CardText>The recipe Soy-and-Ginger-Glazed Salmon with Udon Noodles can be made  <b>in approximately 1 hour and 35 minutes </b>. One portion of this dish contains about  <b>48g of protein </b>,  <b>17g of fat </b>, and a total of  <b>552 calories </b>. This recipe serves 4. For  <b>$5.91 per serving </b>, this recipe  <b>covers 47% </b> of your daily requirements of vitamins and minerals. It works well as a main course. 1 person has tried and liked this recipe. It is brought to you by Food and Wine. If you have fresh ginger, udon noodles, salmon fillets, and a few other ingredients on hand, you can make it. It is a good option if you're following a  <b>dairy free and pescatarian </b> diet. All things considered, we decided this recipe  <b>deserves a spoonacular score of 92% </b>. This score is great. If you like this recipe, take a look at these similar recipes: Salmon With Soy-ginger Noodles, Ginger-Soy Salmon With Soba Noodles, and Soy & ginger salmon with soba noodles.",</CardText>
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
