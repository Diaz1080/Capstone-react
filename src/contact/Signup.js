import { Link } from "react-router-dom";
import { useState } from "react";
import "./main2.scss";

const Signup = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="container-fluid" id="main2">
      <form className={`form ${showSignup ? "form--hidden" : ""}`} id="login">
        <h1 className="form__title">Login</h1>
        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autoFocus
            placeholder="Username or Email"
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autoFocus
            placeholder="Password"
          />
          <div className="form__input-error-message"></div>
        </div>

        <button className="form__button" type="submit">
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
      <form
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
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autoFocus
            placeholder="Password"
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autoFocus
            placeholder="Confirm password"
          />
          <div className="form__input-error-message"></div>
        </div>
        <button className="form__button" type="submit">
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
