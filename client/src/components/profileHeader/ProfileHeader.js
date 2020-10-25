import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class ProfileHeader extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div style={{paddingTop:"40px"}}>
                <div className="row">
                    <div className="col s12 center-align">
                        <Card style={{ backgroundColor: "#FF8802", color: "white" }}>
                            <CardBody>
                                <CardTitle>
                                    <h4>
                                        <b>Welcome</b> {user.name.split(" ")[0]}!
                                    </h4>
                                </CardTitle>
                                <CardText>Search your favourite recipes and save them to your FoodBook!</CardText>
                                <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                borderColor:"white",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                backgroundColor: "#FF8802",
                                color: "white",

                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable accent-3"
                        >
                            Logout
                    </button>
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
