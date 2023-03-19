import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container-fluid" id="homePage">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" id="nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            Resources in Syracuse NY:
            <div className="navbar-nav">
              <Link className="nav-link active" to="/North">
                North
              </Link>
              <Link className="nav-link active" to="/East">
                East
              </Link>
              <Link className="nav-link active" to="/West">
                West
              </Link>
              <Link className="nav-link active" to="/South">
                South
              </Link>
              <Link className="nav-link active" to="/Contact">
                Contact Form{" "}
              </Link>
              <Link className="nav-link active" to="/New">
                New Pantry Request{" "}
              </Link>
              <Link className="nav-link active" to="/PantryUpdate">
                Pantry Update{" "}
              </Link>
              {/* <Link className="nav-link active" to="/Signup">
                Pantry Signup/Login{" "}
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="row" id="north">
          <div className="col-3">
            <h1>
              <Link to="/North">North</Link>
            </h1>
          </div>
          <div className="col-9">
            <ul>
              <li>Food Pantries located in North Side of Syracuse.</li>
              <li>What areas are served.</li>
              <li>Monthly fresh food locations in or near the North Side.</li>
              <li>Requirements.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="row" id="east">
          <div className="col-3">
            <h1>
              <Link to="/East">East</Link>
            </h1>
          </div>
          <div className="col-9">
            <ul>
              <li>Food Pantries located in East Side of Syracuse.</li>
              <li>What areas are served.</li>
              <li>Monthly fresh food locations in or near the East Side.</li>
              <li>Requirements.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="row" id="west">
          <div className="col-3">
            <h1>
              <Link to="/West">West</Link>
            </h1>
          </div>
          <div className="col-9"  id="card">
            <ul>
              <li>Food Pantries located in West Side of Syracuse.</li>
              <li>What areas are served.</li>
              <li>Monthly fresh food locations in or near the West Side.</li>
              <li>Requirements.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="row" id="south">
          <div className="col-3">
            <h1>
              <Link to="/South">South</Link>
            </h1>
          </div>
          <div className="col-9">
            <ul>
              <li>Food Pantries located in South Side of Syracuse.</li>
              <li>What areas are served.</li>
              <li>Monthly fresh food locations in or near the South Side.</li>
              <li>Requirements.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
