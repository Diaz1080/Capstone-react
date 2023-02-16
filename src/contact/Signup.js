import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./main2.scss";


const Signup = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [usernameOrEmail, setusernameOrEmail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const signupFormSubmitted = async (evt) => {
		evt.preventDefault();

		
		const signupResponse = await fetch(`http://localhost:3001/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			
			body: JSON.stringify({ email, password }),
			
			credentials: "include",
		});
		const signupData = await signupResponse.json();
		if (signupData.error) {
			alert(signupData.error);
		} else {
			
			navigateTo("/");
		}
	};

  return (
    <div className="container-fluid" id="main2">
      <form  onSubmit={signupFormSubmitted} className={`form ${showSignup ? "form--hidden" : ""}`} id="login">
        <h1 className="form__title">Login</h1>
        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autoFocus
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={(evt) => {
              setusernameOrEmail(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autoFocus
            placeholder="Password"
            value={password}
            onChange={(evt) => {
              setpassword(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <button onSubmit={signupFormSubmitted} className="form__button" type="submit">
          Continue
        </button>
        <p className="form__text">
          <Link to="#" className="form__link">
            Forgot your password?
          </Link>
        </p>
        <p className="form__text">
          <span
            className="form__link"
            onClick={() => {
              setShowSignup(true);
            }}
            id="linkCreateAccount"
          >
            Don't have an account? Create account
          </span>
        </p>
      </form>
      {/*form--hidden on form className taken out to show the creat page */}
      <form onSubmit={signupFormSubmitted}
        className={`form ${showSignup ? "" : "form--hidden"}`}
        id="createAccount"
      >
        <h1 className="form__title">Create Account</h1>
        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            id="signupUsername"
            className="form__input"
            autoFocus
            placeholder="Username"
            value={username}
            onChange={(evt) => {
              setusername(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-error-message">
          <div className="form__input-group"></div>
          <input
            type="text"
            className="form__input"
            autoFocus
            placeholder="Email Adress"
            value={email}
            onChange={(evt) => {
              setemail(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autoFocus
            placeholder="Password"
            value={password}
            onChange={(evt) => {
              setpassword(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autoFocus
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(evt) => {
              setconfirmPassword(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>
        <button onSubmit={signupFormSubmitted} className="form__button" type="submit">
          Continue
        </button>

        <p className="form__text">
          <Link className="form__link" to="/" id="linkLogin">
            Already have an account? Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
