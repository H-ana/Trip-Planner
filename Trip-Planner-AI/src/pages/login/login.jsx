import { useState } from "react";
import "./login.css";
import logo from '../../images/loginimg.png';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  const [value, setValue] = useState(false);
  const buttonHandler = () => {
    if (value === false) {
      setValue(true);
    } else {
      setValue(false);
    }
  };
  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };


  return (
    <div className="login">
      {value === false && (
        <div className="login-container">
          <form>
            <img className="loginlogo" src={logo} alt="Login"/>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={person.email}
              onChange={handleChangeLogin}
              placeholder="Email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={person.password}
              placeholder="Password"
              onChange={handleChangeLogin}
              required
            />
            <button type="submit">
              Login
            </button>
            <p className="switching">
              Not a member ? <a onClick={buttonHandler}>Signup</a>
            </p>
          </form>
        </div>
      )}
      {value === true && (
        <div className="login-container">
          <form style={{height: "30rem"}}> 
            <img className="loginlogo" src={logo} alt="Login"/>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChangeSignup}
              required
              placeholder="Email"
            />
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={user.username}
              onChange={handleChangeSignup}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChangeSignup}
              required
            />
            <button type="submit">
              Signup
            </button>
            <p className="switching">
              Already a user ? <a onClick={buttonHandler}>Login</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;