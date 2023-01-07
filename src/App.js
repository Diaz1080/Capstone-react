import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <p className="p text-left">
        <a href="index.html">←</a>
      </p>

      <h1>North Side Pantry Information:</h1>
      <div className="row">
        <div className="col">
          <Logo a="https://www.snccsyr.org/" img="./logos/sncc.png" />
        </div>
        <PantryInfo
          bussinessName="Syracuse North East Community Center"
          bussinessName2="Food Pantry-Food Distribution Center"
          adress="716 Hawley Ave"
          cityStateZip="Syracuse NY 13203"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="MON" time="10AM - 12PM" />
          <Hour day="WED" time="10AM - 12PM" />
          <Hour day="THUR" time="2PM - 5PM" />
        </div>
        <Requirements
          text1="First time user must fill"
          text2="out registration form."
        />
        <SocialMediaHandles
          urlLink="https://www.facebook.com/SNCCSYR"
          image="./logos/ico-facebook.png"
          urlLink1="https://twitter.com/SNCCSYR"
          image1="./logos/ico-twitter.png"
          urlLink2="https://www.linkedin.com/company/syracuse-northeast-community-center/?viewAsMember=true"
          image2="./logos/ico-linkedin.png"
          urlLink3="https://www.instagram.com/sncc315/"
          image3="./logos/ico-instagram.png"
        />
      </div>
      {/* End Row 1 */}
      <div className="row">
        <div className="col">
          <Logo
            a="https://vineyardny.org/foodpantry"
            img="./logos/vineyardlogo.png"
          />
        </div>
        <PantryInfo
          bussinessName="Vineyard Church Food Distribution"
          bussinessName2=""
          adress="5oo Butternut Street"
          cityStateZip="Syracuse NY 13208"
          phone="(315) 883-0026"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="SAT" time="10AM - 11:30AM" />
        </div>
        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
          text4="For Emergency assistance call (315) 407-8463."
        />
        <SocialMediaHandles
          urlLink="http://instagram.com/vineyardNYsyracuse"
          image="./logos/ico-instagram.png"
          urlLink1="https://www.facebook.com/vineyardnysyracuse/"
          image1="./logos/ico-facebook.png"
        />
      </div>
      {/* End Row 2 */}
      <div className="row">
        <div className="col">
          <Logo a="" img="./logos/allfaiths.png" />
        </div>
        <PantryInfo
          bussinessName="All Faiths Food Pantry"
          bussinessName2=""
          adress="406 Court ST"
          cityStateZip="Syracuse NY 13203"
          phone="(315)478-0916"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="TUE" time="11AM - 1PM" />
        </div>
        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
        />
        <SocialMediaHandles
          urlLink=""
          image="./logos/ico-facebook.png"
          urlLink1=""
          image1="./logos/ico-twitter.png"
          urlLink2=""
          image2="./logos/ico-linkedin.png"
          urlLink3=""
          image3="./logos/ico-instagram.png"
        />
      </div>
      {/* End Row 3 */}
      <div className="row">
        <Logo a="https://claupc.org/syracuse/" img="./logos/cla.png" />

        <PantryInfo
          bussinessName="Christian Life Assembly Church"
          bussinessName2="Food Distribution Center"
          adress="1025 N.Townsend ST"
          cityStateZip="Syracuse NY 13208"
          phone="(315)478-2878"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="First Wed of every Month" time="2PM - 4:30PM" />
        </div>

        <Requirements
          text1="Everyone is Welcomed."
          text2="Fresh Produce available."
        />

        <SocialMediaHandles />
      </div>
      {/* End Row 4 */}
      <div className="row" id="pantry">
        <FoodBank
          urlLink4="https://www.foodbankcny.org/"
          bussinessName4="Food Bank"
          bussinessName5="of Central"
          bussinessName6="New York"
          adress2="7066 Interstate Island Road"
          cityStateZip2="Syracuse, NY 13209"
          phone2="(315) 437-1899"
        />

        <Finder
          finder1="Food Bank of Central"
          finder2="New York"
          urlLink5="https://foodbankcny.maps.arcgis.com/apps/InformationLookup/index.html?appid=2804f1d24ec14eff92ac216bbf0b220e"
          finder3="Food Finder"
        />
        <Mobile
          mobile1="Mobile Food Pantry"
          mobile2="Distribution Schedule"
          urlLink6=""
          mobile3="Flyer"
        />
        <Fresh
          fresh1="Fresh Foods"
          fresh2="Distribution Schedule"
          urlLink7=""
          fresh3="Flyer"
        />
        <SocialMediaHandles
          urlLink="http://www.facebook.com/foodbankcny"
          image="./logos/ico-facebook.png"
          urlLink1="http://instagram.com/foodbankofcny"
          image1="./logos/ico-instagram.png"
          urlLink2="http://www.linkedin.com/company/food-bank-of-central-new-york"
          image2="./logos/ico-linkedin.png"
          urlLink3="http://twitter.com/foodbankofcny"
          image3="logos/ico-twitter.png"
        />
      </div>
    </div>
  );
}

const Logo = ({ a, img }) => {
  return (
    <div className="col">
      <a href={a}>
        <img src={img} id="sncc" />
      </a>
    </div>
  );
};

const PantryInfo = ({
  bussinessName,
  bussinessName2,
  adress,
  cityStateZip,
  phone,
}) => {
  return (
    <div className="col">
      <p id="arrow text-left">{bussinessName}</p>
      <p id="arrow text-left">{bussinessName2}</p>
      <p>{adress}</p>
      <p>{cityStateZip}</p>
      <p>{phone}</p>
    </div>
  );
};

const Hour = ({ day, time }) => {
  return (
    <div className="col" id="hours">
      <ul>
        <li>
          {day}: {time}
        </li>
      </ul>
    </div>
  );
};

const Requirements = ({ text1, text2, text3, text4 }) => {
  return (
    <div className="col">
      <h4>Requirement:</h4>
      <ul>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
      </ul>
    </div>
  );
};

const SocialMediaHandles = ({
  urlLink,
  urlLink1,
  urlLink2,
  urlLink3,
  image,
  image1,
  image2,
  image3,
}) => {
  if (!image && !image1 && !image2 && !image3) {
    return (
      <div className="col">
        <h5>Social Media Handles</h5>
        <p>No social media available</p>
      </div>
    );
  }
  return (
    <div className="col">
      <h5>Social Media Handles</h5>
      {image && (
        <span>
          <a href={urlLink}>
            <img src={image} id="logo" />
          </a>
        </span>
      )}
      <span>
        <a href={urlLink1}>
          <img src={image1} id="logo" />
        </a>
      </span>
      <span>
        <a href={urlLink2}>
          <img src={image2} id="logo" />
        </a>
      </span>
      <span>
        <a href={urlLink3}>
          <img src={image3} id="logo" />
        </a>
      </span>
    </div>
  );
};
const FoodBank = ({
  urlLink4,
  bussinessName4,
  bussinessName5,
  bussinessName6,
  adress2,
  cityStateZip2,
  phone2,
}) => {
  return (
    <div className="col">
      <h4>
        <a href={urlLink4}>{bussinessName4}</a> {bussinessName5}
      </h4>
      <h4>{bussinessName6}</h4>
      <p>{adress2}</p>
      <p>{cityStateZip2}</p>
      <p>{phone2}</p>
    </div>
  );
};
const Finder = ({ finder1, finder2, urlLink5, finder3 }) => {
  return (
    <div className="col">
      <p>{finder1}</p>
      <p>{finder2}</p>
      <a href={urlLink5}>{finder3}</a>
    </div>
  );
};

const Mobile = ({ mobile1, mobile2, urlLink6, mobile3 }) => {
  return (
    <div className="col">
      <p>{mobile1}</p>
      <p>{mobile2}</p>
      <a href={urlLink6}>
        <p>{mobile3}</p>
      </a>
    </div>
  );
};

const Fresh = ({ fresh1, fresh2, urlLink7, fresh3 }) => {
  return (
    <div className="col">
      <p>{fresh1}</p>
      <p>{fresh2}</p>
      <a href={urlLink7}>
        <p>{fresh3}</p>
      </a>
    </div>
  );
};

export default App;
