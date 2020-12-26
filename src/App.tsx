import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import { UserData } from "./mock/User.data";

interface AppState {
  alertMessage: string;
  showAlert: boolean;
  isLogin: boolean;
  user: UserData;
}

export default class App extends React.Component<{}, AppState> {
  state = {
    alertMessage: "",
    showAlert: false,
    isLogin: false,
    user: { email: "", password: "", name: "" },
  };

  setLogin = (status: boolean, user: UserData) => {
    this.setState({ isLogin: status, user });
  };

  setAlert = (status: boolean, alertMessage: string) => {
    this.setState({ showAlert: status, alertMessage });

    setTimeout(() => {
      this.setState({ showAlert: false, alertMessage: "" });
    }, 2000);
  };

  render() {
    return (
      <div className="app container">
        {this.state.showAlert ? (
          <div className="alert alert-danger" role="alert">
            {this.state.alertMessage}
          </div>
        ) : (
          <div></div>
        )}
        {this.state.isLogin ? <Home user={this.state.user}></Home> : <Login setLogin={this.setLogin} setAlert={this.setAlert}></Login>}
      </div>
    );
  }
}
