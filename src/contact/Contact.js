import { Link } from "react-router-dom";
import "./Main.scss";

const Contact = () => {
  return (
    <div className="container-fluid" id="main">
      <form
        className="form"
        method="POST"
        action="https://mailthis.to/nydia1080@yahoo.com"
      >
        <h1 className="form__title">Contact Form</h1>

        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            id="signupUsername"
            className="form__input"
            autofocus
            placeholder="First Name"
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Last Name"
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
            rows="4"
            autofocus
            placeholder="I am Listening..."
          />
          <div className="form__input-error-message"></div>
        </div>

        {/* <!-- the placeholder would not work on a text area aproach
                placed another div class form input group.

                Need to make the text area larger.
                
                It is set up to Post to Email-->

             */}

        <div className="form__input-group">
          <button className="form__button" type="submit" value="submit">
            Continue
          </button>
          <div className="form__input-error-message"></div>
        </div>
        <p className="form__text">
          <Link className="form__link" to="/" id="arrow">
            ⬅︎
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Contact;
