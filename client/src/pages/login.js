import React from 'react';
import { Form, FormGroup,Label, Input, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import "../stylesheets/style.css"

const Login = () => {
  return (
    <div>
      <Navbar>
        <div className="container-fluid bg-dark">
          <div className="navbar-header">
            Hello
          </div>
        </div>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Login Form</h2>
            <Form className="login">
              <FormGroup>
                <Label for="exampleInputEmail1">Email address</Label>
                <Input type="email" className="form-control" id="email-input" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">Password</Label>
                <Input type="password" className="form-control" id="password-input" placeholder="Password" />
              </FormGroup>
              <Button type="submit">Login</Button>
            </Form>
            <br />
            <p>Or sign up <a href="/">here</a></p>
          </div>
        </div>
</div>
 </div>
  );
};

export default Login;