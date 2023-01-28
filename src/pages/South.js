import { Link } from "react-router-dom";
import Template, {
  Logo,
  PantryInfo,
  Hour,
  Requirements,
  SocialMediaHandles,
  FoodBank,
  Fresh,
  Mobile,
  Finder,
} from "../pages/Template";
import "./News.scss";

const South = () => {
  return (
    <div className="container-fluid news">
      <div className="row" id="link">
        <div className="col-1">
          <Link to="/" id="arrow">
            ⇦
          </Link>
        </div>
        <Template header="South Side Pantry Information:" />
      </div>

      <div className="row" id="row">
        <div className="col">
          <Logo a="" img="./logos/apostolic.png" />
        </div>
        <PantryInfo
          bussinessName="Apostolic Church of Jesus Christ"
          bussinessName2="Food  Pantry"
          adress="347 Courtland Ave"
          cityStateZip="Syracuse NY 13202"
          phone="(315) 472-1665"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="Last SAT on Month" time="11AM - 2PM" />
          
        </div>
        <Requirements
          text1="First time user must fill"
          text2="out registration form."
        />
        <SocialMediaHandles />
      </div>
      {/* End Row 1 */}
      <div className="row" id="row">
        <div className="col">
          <Logo a="" img="./logos/pantry.jpg" />
        </div>
        <PantryInfo
          bussinessName="Food Pantry"
          bussinessName2="Food Distribution Center"
          adress="Adress"
          cityStateZip="Syracuse NY "
          phone="phone #"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="SAT" time="10AM - 11:30AM" />
        </div>
        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
          text4="For Emergency assistance call ."
        />
        <SocialMediaHandles />
      </div>
      {/* End Row 2 */}
      <div className="row" id="row">
        <Logo a="" img="./logos/pantry.jpg" />

        <PantryInfo
          bussinessName="Food Pantry"
          bussinessName2="Food Distribution Center"
          adress="Adress"
          cityStateZip="Syracuse NY "
          phone="phone #"
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
        <SocialMediaHandles />
      </div>
      {/* End Row 3 */}
      <div className="row" id="row">
        <Logo a="https://claupc.org/syracuse/" img="./logos/pantry.jpg" />

        <PantryInfo
          bussinessName="Food Pantry"
          bussinessName2="Food Distribution Center"
          adress="Adress"
          cityStateZip="Syracuse NY "
          phone="phone #"
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
};

export default South;