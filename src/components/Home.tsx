import React from "react";
import { UserData } from "../mock/User.data";

export default class Home extends React.Component<{ user: UserData }> {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>HOME</h1>
        <h3>Welcome {user.name}!</h3>
      </div>
    );
  }
}
