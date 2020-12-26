import { useState } from "react";
import { UserData } from "../mock/User.data";
import { userLogin } from "../services/User.services";

interface LoginProps {
  setAlert: (status: boolean, alertMessage: string) => void;
  setLogin: (status: boolean, user: UserData) => void;
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();
    const user = userLogin({ email, password });

    if (!user) {
      props.setAlert(true, "Email or Password is incorrect!");
      return;
    }

    props.setLogin(true, user);
  };

  const passwordOnChange = (event: any) => {
    setPassword(event.target.value);
  };

  const emailOnChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control col-md-6" placeholder="Enter email" onChange={emailOnChange} value={email} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control col-md-6" placeholder="Password" onChange={passwordOnChange} value={password} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
