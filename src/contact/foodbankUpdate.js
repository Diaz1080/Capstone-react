import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

// add to all of the fields thatneed to be submitted
const FoodbankUpdate = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyNamecontinued, setcompanyNamecontinued] = useState("");
  const [Adress, setAdress] = useState("");
  const [cityStateZip, setcityStateZip] = useState("");
  const [phone, setphone] = useState("");
  const [freshFood, setfreshFood] = useState("");
  const [mobileFood, setmobileFood] = useState("");
  const [facebook, setfacebook] = useState("");
  const [instagram, setinstagram] = useState("");
  const [twitter, settwitter] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const navigateTo = useNavigate();

  // const formSubmitted = (evt) => {
  //   if (companyName.length > 30) {
  //     alert("Name too long please split into other field");
  //   }
  // };

  const foodbankUpdateformSubmitted = async (evt) => {
    evt.preventDefault();
    const fbpantryUpdateResponse = await fetch(
      `http://Albacapstone-env.eba-isyz4dux.us-east-1.elasticbeanstalk.com/foodbankUpdate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          companyName,
          companyNamecontinued,
          Adress,
          cityStateZip,
          phone,
          facebook,
          instagram,
          twitter,
          linkedIn,
        }),

        credentials: "include",
      }
    );
    const fbpantryUpdateData = await fbpantryUpdateResponse.json();
    if (fbpantryUpdateData.error) {
      alert(fbpantryUpdateData.error);
    } else {
      navigateTo("/");
    }
    if (companyName.length > 30) {
      alert("Name too long please split into other field");
    }
  };

  return (
    <div className="container-main main">
      <form
        className="form"
        // method="POST"
        onSubmit={foodbankUpdateformSubmitted}
        // action="https://mailthis.to/nydia1080@yahoo.com"
      >
        <h1 className="form__title">Foodbank Update Request Form</h1>

        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            id="signupUsername"
            className="form__input"
            autofocus
            placeholder="Company Name"
            // add to all of the fields thatneed to be submitted
            value={companyName}
            onChange={(evt) => {
              setCompanyName(evt.target.value);
            }}
          />

          <div className="form__input-error-message">
            {companyName.length}/30 Characters
          </div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            id="signupUsername"
            className="form__input"
            autofocus
            placeholder="Company Name continued"
            // add to all of the fields thatneed to be submitted
            value={companyNamecontinued}
            onChange={(evt) => {
              setcompanyNamecontinued(evt.target.value);
            }}
          />
        </div>

        <div className="form__input-error-message">
          {companyName.length}/30 Characters
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Adress"
            value={Adress}
            onChange={(evt) => {
              setAdress(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="text"
            id="signupUsername"
            className="form__input"
            autofocus
            placeholder="City State, Zip"
            // add to all of the fields that need to be submitted
            value={cityStateZip}
            onChange={(evt) => {
              setcityStateZip(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Phone"
            value={phone}
            onChange={(evt) => {
              setphone(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Fresh Food link"
            value={freshFood}
            onChange={(evt) => {
              setfreshFood(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Mobile Food link"
            value={mobileFood}
            onChange={(evt) => {
              setmobileFood(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Facebook"
            value={facebook}
            onChange={(evt) => {
              setfacebook(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Instagram"
            value={instagram}
            onChange={(evt) => {
              setinstagram(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Twitter"
            value={twitter}
            onChange={(evt) => {
              settwitter(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="LinkedIn"
            value={linkedIn}
            onChange={(evt) => {
              setlinkedIn(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        {/* <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Requirements for Services"
          />
          <div className="form__input-error-message"></div>
        </div> */}
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

export default FoodbankUpdate;
