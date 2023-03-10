import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./main2.scss";

const Signup = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [usernameOrEmail, setusernameOrEmail] = useState("");
  const [password, setpassword] = useState("");
  const [direction, setdirection] = useState("");
  const [email, setemail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [pantryList, setPantryList] = useState();
  const [pantry, setPantry] = useState();
  const navigateTo = useNavigate();

  const updatePantryList = async (direction) => {
    const res = await fetch(
      `https://api.syracuse-food-pantry-easy-search.org/pantries/${direction.toLowerCase()}`
    );
    const list = await res.json();
    console.log(list);
    setPantryList(list.pantries);
    setPantry(list.pantries[0].companyName);
  };

  const signupFormSubmitted = async (evt) => {
    evt.preventDefault();

    if (showSignup) {
      const signupResponse = await fetch(
        `https://api.syracuse-food-pantry-easy-search.org/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            showSignup,
            email,
            password,
            confirmPassword,
            pantry,
          }),

          credentials: "include",
        }
      );
      const signupData = await signupResponse.json();
      if (signupData.error) {
        alert(signupData.error);
      } else {
        navigateTo("/");
      }
    } else {
      const loginResponse = await fetch(
        `https://api.syracuse-food-pantry-easy-search.org/Login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            password,
            email: usernameOrEmail,
          }),

          credentials: "include",
        }
      );
      const loginData = await loginResponse.json();
      if (loginData.error) {
        alert(loginData.error);
      } else {
        navigateTo("/");
      }
    }
  };

  return (
    <div className="container-fluid" id="main2">
      <form
        onSubmit={signupFormSubmitted}
        className={`form ${showSignup ? "form--hidden" : ""}`}
        id="login"
      >
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
        onSubmit={signupFormSubmitted}
        className={`form ${showSignup ? "" : "form--hidden"}`}
        id="createAccount"
      >
        <h1 className="form__title">Create Account</h1>
        <select
          id="drop"
          value={direction}
          onChange={(evt) => {
            setdirection(evt.target.value);
            updatePantryList(evt.target.value);
          }}
        >
          <option>Pantry Options</option>
          <option>East</option>
          <option>West</option>
          <option>North</option>
          <option>South</option>
        </select>
        {pantryList && (
          <select
            id="drop"
            value={pantry}
            onChange={(evt) => {
              setPantry(evt.target.value);
            }}
          >
            {pantryList.map((pantry) => {
              return <option>{pantry.companyName}</option>;
            })}
          </select>
        )}
        {/* <div class="dropdown" id="drop">
  <button class="btn btn-warning dropdown-toggle"
   type="button" 
   data-bs-toggle="dropdown" 
   aria-expanded="false"
   >
    Pantry Option
  </button>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">East</a></li>
    <li><a class="dropdown-item" href="#">West</a></li>
    <li><a class="dropdown-item" href="#">North</a></li>
    <li><a class="dropdown-item" href="#">South</a></li>
  </ul>
</div> 
*/}
        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          {/* <input
            type="text"
            id="signupUsername"
            className="form__input"
            autoFocus
            placeholder="Username"
            value={username}
            onChange={(evt) => {
              setusername(evt.target.value);
            }}
          /> */}

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
