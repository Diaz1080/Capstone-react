import { Link } from "react-router-dom";
import "./Main.scss";

const New = () => {
  return (
    <div className="container-main main">
      <form
        className="form"
        method="POST"
        action="https://mailthis.to/nydia1080@yahoo.com"
      >
        <h1 className="form__title">New Pantry Request Form</h1>

        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            id="signupUsername"
            className="form__input"
            autofocus
            placeholder="Company Name"
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Adress"
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Contact Information"
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Email"
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Social Media Handles"
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Services Provided"
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Requirements for Services"
          />
          <div className="form__input-error-message"></div>
        </div>
        {/* <!--    <div className="form__input-group">
                <input
                type="password"
                className="form__input"
                autofocus
                placeholder="Password"
                />
                <div className="form__input-error-message"></div>
            </div>

            <div className="form__input-group">
                <input
                type="password"
                className="form__input"
                autofocus
                placeholder="Confirm password"
                />
                <div className="form__input-error-message"></div>
            </div>--> */}

        <div className="form__input-group">
          <button className="form__button" type="submit" value="submit">
            Continue
          </button>
          <div className="form__input-error-message"></div>
        </div>
        <p className="form__text">
          <Link className="form__link" to="/" id="arrow">
            ⇦
          </Link>
        </p>
      </form>
    </div>
  );
};

export default New;
