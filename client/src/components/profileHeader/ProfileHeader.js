import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
    Card, CardBody,
    Row, Container, Button
} from 'reactstrap';
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import axios from "axios";

class ProfileHeader extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    userId = this.props.auth.user.id

    saveDescription = (recipe)=> {
        // axios.put("/api/users/description/" + this.userId, recipe).then(
          console.log("Description inserted")
        // )
      }

    render() {
        const { user } = this.props.auth;
        return (
            <div style={{paddingTop:"40px"}}>
                <div className="row">
                    <div className="col s12 center-align">
                        <Card style={{ backgroundColor: "#FF8802", color: "white" }}>
                            <CardBody>
                            <Row>
                                <h4>
                                    <b>Welcome</b> {user.name.split(" ")[0]}!
                                </h4>
                            </Row>
                            <Row>
                                <Container>
                                    <DescriptionBox saveDescription={this.saveDescription}/>
                                </Container>
                            </Row>
                            <Row>
                                <Button
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        backgroundColor: "#FF8802",
                                        borderColor: "white",
                                        color: "white"
                                    }}
                                    onClick={this.onLogoutClick}
                                >
                                    Logout
                                </Button>
                            </Row>
                            </CardBody>
                        </Card>
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
