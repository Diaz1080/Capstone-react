import { Link } from "react-router-dom";
import "./Main.css"

const Signup = () => {
	return (
		<div ClassName="container">
      <form ClassName="form" id="login">
        <h1 ClassName="form__title">Login</h1>
        <div ClassName="form__message form__message--error"></div>
        <div ClassName="form__input-group">
          <input
            type="text"
            ClassName="form__input"
            autofocus
            placeholder="Username or Email"
          />
          <div ClassName="form__input-error-message"></div>
        </div>

        <div ClassName="form__input-group">
          <input
            type="password"
            ClassName="form__input"
            autofocus
            placeholder="Password"
          />
          <div ClassName="form__input-error-message"></div>
        </div>

        <button ClassName="form__button" type="submit">Continue</button>
        <p ClassName="form__text">
          <Link to="#" ClassName="form__link">Forgot your password?</Link>
        </p>
        <p ClassName="form__text">
          <Link ClassName="form__link" to="./Home" id="linkCreateAccount"
            >Don't have an account? Create account</Link>
        </p>
      </form>
      <form ClassName="form form--hidden" id="createAccount">
        <h1 ClassName="form__title">Create Account</h1>
        <div ClassName="form__message form__message--error"></div>
        <div ClassName="form__input-group">
          <input
            type="text"
            id="signupUsername"
            ClassName="form__input"
            autofocus
            placeholder="Username"
          />
          <div ClassName="form__input-error-message"></div>
        </div>
        <div ClassName="form__input-error-message">
          <div ClassName="form__input-group"></div>
          <input
            type="text"
            ClassName="form__input"
            autofocus
            placeholder="Email Adress"
          />
          <div ClassName="form__input-error-message"></div>
        </div>
        <div ClassName="form__input-group">
          <input
            type="password"
            ClassName="form__input"
            autofocus
            placeholder="Password"
          />
          <div ClassName="form__input-error-message"></div>
        </div>
        <div ClassName="form__input-group">
          <input
            type="password"
            ClassName="form__input"
            autofocus
            placeholder="Confirm password"
          />
          <div ClassName="form__input-error-message"></div>
        </div>
        <button ClassName="form__button" type="submit">Continue</button>

        <p ClassName="form__text">
          <Link ClassName="form__link" to="./Home" id="linkLogin"
            >Already have an account? Sign In</Link>
        </p>
      </form>
    </div>
	);
};

export default Signup;