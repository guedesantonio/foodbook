import React from 'react';

const Members = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/logout">
              Logout
      </a>
          </div>
        </div>
      </nav>
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