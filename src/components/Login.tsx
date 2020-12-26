import React from "react";
import { UserLoginData, UserData } from "../mock/User.data";
import { userLogin } from "../services/User.services";

interface LoginProps {
  setAlert: (status: boolean, alertMessage: string) => void;
  setLogin: (status: boolean, user: UserData) => void;
}

export default class Login extends React.Component<LoginProps, UserLoginData> {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (event: any) => {
    event.preventDefault();
    const user = userLogin(this.state);

    if (!user) {
      this.props.setAlert(true, "Email or Password is incorrect!");
      return;
    }

    this.props.setLogin(true, user);
  };

  passwordOnChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  emailOnChange = (event: any) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control col-md-6"
              placeholder="Enter email"
              onChange={this.emailOnChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control col-md-6"
              placeholder="Password"
              onChange={this.passwordOnChange}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
