import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username").email(),
    password: Joi.string().required().label("Password").min(5),
  };

  submit = () => {
    // call server
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          <div className="btn-toolbar">
            {this.renderSubmit("Login")}
            <Link className="btn btn-secondary mx-2" to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
