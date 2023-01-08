import { Link } from "react-router-dom";
import "./Main.css";

const Contact = () => {
	return (

        <div ClassName="container">
            <form ClassName="form" method="POST" action="https://mailthis.to/nydia1080@yahoo.com">
                <h1 ClassName="form__title">Contact Form</h1>
                
                <div ClassName="form__message form__message--error"></div>
                <div ClassName="form__input-group">
                    <input
                    type="text"
                    id="signupUsername"
                    ClassName="form__input"
                    autofocus
                    placeholder="First Name"
                    />
                    <div ClassName="form__input-error-message"></div>
                </div>

                <div ClassName="form__input-group">
                    <input
                    type="text"
                    ClassName="form__input"
                    autofocus
                    placeholder="Last Name"
                    />
                    <div ClassName="form__input-error-message"></div>
                </div>
                    
                <div ClassName="form__input-group">
                    <input
                    type="text"
                    ClassName="form__input"
                    autofocus
                    placeholder="Email"
                    />
                    <div ClassName="form__input-error-message"></div>
                </div>

                <div ClassName="form__input-group">
                    <input
                    type="text"
                    ClassName="form__input"
                    rows="4"
                    autofocus
                    placeholder="I am Listening..."
                    />
                    <div ClassName="form__input-error-message"></div>
                </div>
                
            {/* <!-- the placeholder would not work on a text area aproach
                placed another div class form input group.

                Need to make the text area larger.
                
                It is set up to Post to Email-->

             */}
                    

                <div ClassName="form__input-group">
                    <button ClassName="form__button" type="submit" value="submit">
                        Continue
                    </button>
                    <div ClassName="form__input-error-message"></div>
                </div>
                <p ClassName="form__text">
                    <Link ClassName="form__link" to="/Home" id="arrow"
                      >⬅︎</Link>
                </p>
            </form>
        </div>

        );
    };
export default Contact;