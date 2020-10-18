import React from 'react';
import {Alert, Form, FormGroup, Label, Input, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const SignUp = () => {
  return (
    <div>
      <Navbar>
        <div className="container-fluid">
          <div className="navbar-header">
          </div>
        </div>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Sign Up Form</h2>
            <Form className="signup">
              <FormGroup>
                <Label for="exampleInputEmail1">Email address</Label>
                <Input type="email" className="form-control" id="email-input" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">Password</Label>
                <Input type="password" className="form-control" id="password-input" placeholder="Password" />
              </FormGroup>
              <Alert style={{display : "none"}} id="alert" className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span> <span className="msg"></span>
              </Alert>
              <Button type="submit" className="btn btn-default">Sign Up</Button>
            </Form>
            <br />
            <p>Or log in <a href="/login">here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;