import React,{ useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import logo from '../../images/loginimg.png';
import {auth, provider} from '../../firebase';
import {signInWithPopup} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { createUserWithEmailAndPassword } from "firebase/auth";


function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [person, setPerson] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMesg, setErrorMesg] = useState("");
  const resetForm = () => {
    setUser({
      email: "",
      password: "",
      username: "",
    });
    setPerson({
      email: "",
      password: "",
    });
  };
  const [value, setValue] = useState(false);
  const buttonHandler = () => {
    if (value === false) {
      setValue(true);
    } else {
      setValue(false);
    }
    resetForm();
  };
  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrorMsg("");
  };
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
    setErrorMesg("");
  };
  const signIn = (e) => {
    if (!person.email || !person.password) {
      setErrorMesg("Fill all fields");
      return;
    }
    setErrorMesg("");
    e.preventDefault();
    signInWithEmailAndPassword(auth, person.email, person.password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/home");
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        setErrorMesg("Invalid login credentials");
      });
  };
  const signUp = (e) => {
    if (!user.username || !user.email || !user.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential);
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg("Failed to create user");
      });
  };
  const [val,setVal] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setVal(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate("/home");
        })
    }

    useEffect(()=>{
        setVal(localStorage.getItem('email'))
        })
  return (
    <div className="login">
      {value === false && (
        <div className="login-container">
          <form onSubmit={signIn}>
            <img className="loginlogo" src={logo} alt="Login"/>
            {errorMesg && (<div className="error-message">{errorMesg}</div>)}
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
            <p className="or">or</p>
            <div>
            <button className="google-sign-in-button" onClick={handleClick}>
            <img className="google-sign-in-button__icon"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
            />
      Sign in with Google
    </button>
            </div>
            <p className="switching">
              Not a member ? <a onClick={buttonHandler}>Signup</a>
            </p>
          </form>
          
        </div>
      )}
      {value === true && (
        <div className="login-container">
          <form onSubmit={signUp}> 
            <img className="loginlogo" src={logo} alt="Login"/>
            {errorMsg && (<div className="error-message">{errorMsg}</div>)}
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
              Already a user ? <a onClick={buttonHandler} >Login</a>
            </p>
          </form>
          
        </div>
      )}
    </div>
  );
}

export default Login;