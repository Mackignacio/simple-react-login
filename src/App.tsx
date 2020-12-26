import { useState } from "react";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import { UserData } from "./mock/User.data";

const App = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({ email: "", password: "", name: "" });

  const setLogin = (status: boolean, user: UserData) => {
    setIsLogin(status);
    setUser(user);
  };

  const setAlert = (status: boolean, alertMessage: string) => {
    setAlertMessage(alertMessage);
    setShowAlert(status);

    setTimeout(() => {
      setAlertMessage("");
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="app container">
      {showAlert ? (
        <div className="alert alert-danger" role="alert">
          {alertMessage}
        </div>
      ) : (
        <div></div>
      )}
      {isLogin ? <Home user={user}></Home> : <Login setLogin={setLogin} setAlert={setAlert}></Login>}
    </div>
  );
};

export default App;
