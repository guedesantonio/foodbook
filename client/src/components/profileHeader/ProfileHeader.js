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

    render() {
        const { user } = this.props.auth;
        return (
            <div style={{paddingTop:"40px"}}>
                <div className="row">
                    <Container className="themed-container" fluid={true} >
                    
                        <Card 
                        style={{ 
                            backgroundColor: "#FF8802", 
                            color: "white",
                            padding:"15px",
                            boxShadow: "3px 3px 5px 6px rgba(0, 0, 0, 0.4)",
                            }}>
                            <CardBody>
                            <Row>
                                <h4
                                style={{
                                    color:"white",
                                    textShadow:" 0 2px 2px black",
                                  }}>
                                 {user.name.split(" ")[0]}
                                </h4>
                            </Row>
                            <Row>
                                <Container>
                                    <DescriptionBox userId={user.id} />
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
                                    className="btn btn-large waves-effect waves-light hoverable accent-3"
                                >
                                    Logout
                                </Button>
                            </Row>
                            </CardBody>
                        </Card>
                    </Container>
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
