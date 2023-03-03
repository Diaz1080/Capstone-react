import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./main2.scss";

const Contact = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const contactSubmited = async () => {
    const response = await fetch("https://api.syracuse-food-pantry-easy-search.org/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, message })
      
     
    });
    
  };
  

  return (
    <div className="container-fluid" id="main2">
      <form
        className="form"
        onSubmit={contactSubmited}
        // method="POST"

        // action="https://mailthis.to/nydia1080@yahoo.com"
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
            value={firstName}
            onChange={(evt) => {
              setfirstName(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Last Name"
            value={lastName}
            onChange={(evt) => {
              setlastName(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Email"
            value={email}
            onChange={(evt) => {
              setemail(evt.target.value);
            }}
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
            value={message}
            onChange={(evt) => {
              setmessage(evt.target.value);
            }}
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
