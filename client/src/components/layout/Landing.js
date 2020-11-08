import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div 
      style={{ 
        height: "30vh", width:"85vw", 
        backgroundColor: "#FF8802", 
        marginTop: "400px",
        boxShadow: "3px 3px 5px 6px rgba(0, 0, 0, 0.4)"
      }} 
        className="container valign-wrapper ">
        <div className="row">
          <div 
          className="col s12 center-align"
          style={{
            color:"white",
            textShadow:" 0 2px 2px black"
          }}
          >
            <h3>
            <span style={{ fontFamily: "monospace",  color:"white" }}>FoodBook </span>!
               Collect, share and search your favourite {" "}
              <span style={{ fontFamily: "monospace" }}>RECIPES</span>!
            </h3>
            <p style={{
            color:"WHITE"
          }}>
              LOG IN or Register to start connecting with your favourite chefs!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  borderColor: "white",
                  letterSpacing: "1.5px",
                  backgroundColor:"#FF8802",
                  color:"white"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  borderColor: "white",
                  backgroundColor:"#FF8802",
                  color:"white"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;