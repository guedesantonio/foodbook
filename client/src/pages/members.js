import React from 'react';
import { Navbar, NavbarBrand, } from 'reactstrap';

const Members = () => {
  return (
    <div>
      <Navbar>
        <div className="container-fluid">
          <div className="navbar-header">
          <NavbarBrand href="/logout">
              Logout
      </NavbarBrand>
          </div>
        </div>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Welcome <span className="member-name"></span></h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Members;