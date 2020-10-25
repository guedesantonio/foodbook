import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh",  }} className="container valign-wrapper">
        <div className="row">
          <div 
          className="col s12 center-align"
          style={{
            color:"#FF8802",
            textShadow:" 0 1px 1px white"
          }}
          >
            <h4>
            <span style={{ fontFamily: "monospace",  color:"#FF8802" }}>FoodBook </span>!
               Collect, share and search your favourite {" "}
              <span style={{ fontFamily: "monospace" }}>RECIPES</span>!
            </h4>
            <p style={{
            color:"WHITE"
            , textShadow:" 0 1px 1px #FF8802"
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
                  backgroundColor:"#FF8802",
                  color:"white"
                }}
                className="btn btn-large btn-flat waves-effect "
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