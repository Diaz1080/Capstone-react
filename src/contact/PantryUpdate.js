import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import APIUrl from "../APIUrl";
import "./Main.scss";

// add to all of the fields thatneed to be submitted
const PantryUpdate = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyNamecontinued, setcompanyNamecontinued] = useState("");
  const [Adress, setAdress] = useState("");
  const [cityStateZip, setcityStateZip] = useState("");
  const [phone, setphone] = useState("");
  const [facebook, setfacebook] = useState("");
  const [instagram, setinstagram] = useState("");
  const [twitter, settwitter] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [text3, settext3] = useState("");
  const [day1, setday1] = useState("");
  const [time1, settime1] = useState("");
  const [day2, setday2] = useState("");
  const [time2, settime2] = useState("");
  const [day3, setday3] = useState("");
  const [time3, settime3] = useState("");
  const navigateTo = useNavigate();

  // const formSubmitted =  (evt) => {
  //   if (companyName.length > 30) {
  //     alert("Name too long please split into other field");
  //   }
  // };

  const pantryUpdateformSubmitted = async (evt) => {
    evt.preventDefault();
    const pantryUpdateResponse = await fetch(`${APIUrl}/PantryUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        companyName,
        companyNamecontinued,
        Adress,
        cityStateZip,
        facebook,
        instagram,
        twitter,
        linkedIn,
        text1,
        text2,
        text3,
        day1,
        time1,
        day2,
        time2,
        day3,
        time3,
      }),

      credentials: "include",
    });
    const pantryUpdateData = await pantryUpdateResponse.json();
    if (pantryUpdateData.error) {
      alert(pantryUpdateData.error);
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
        onSubmit={pantryUpdateformSubmitted}
        // action="https://mailthis.to/nydia1080@yahoo.com"
      >
        <h1 className="form__title">Pantry Update Request Form</h1>

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
            placeholder="DAY #1"
            value={day1}
            onChange={(evt) => {
              setday1(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Time #1"
            value={time1}
            onChange={(evt) => {
              settime1(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Day #2"
            value={day2}
            onChange={(evt) => {
              setday2(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Time #2"
            value={time2}
            onChange={(evt) => {
              settime2(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Day #3"
            value={day3}
            onChange={(evt) => {
              setday3(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Time #3"
            value={time3}
            onChange={(evt) => {
              settime3(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Requirements #1"
            value={text1}
            onChange={(evt) => {
              settext1(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Requirements #2"
            value={text2}
            onChange={(evt) => {
              settext2(evt.target.value);
            }}
          />
          <div className="form__input-error-message"></div>
        </div>

        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Requirements #3"
            value={text3}
            onChange={(evt) => {
              settext3(evt.target.value);
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
          <button
            onSubmit={pantryUpdateformSubmitted}
            className="form__button"
            type="submit"
            value="submit"
          >
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

export default PantryUpdate;