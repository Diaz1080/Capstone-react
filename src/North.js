import { Link } from "react-router-dom";
import "./App.css";
import Template, {
  Logo,
  PantryInfo,
  Hour,
  Requirements,
  SocialMediaHandles,
} from "./Template";
import App from "./App";

const North = () => {
  return (
    <div>
      
      <Link to="/South">South</Link>
      <Link to="/East">East</Link>
      <Link to="/West">West</Link>

      <div className="container-fluid">
        {/* <p className="p text-left">
        <a href="index.html">←</a>
      </p> */}

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
        {/* <div className="row">
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
      </div> */}
        {/* End Row 2 */}
        {/* <div className="row">
       
          <Logo a="" img="./logos/allfaiths.png" />
        
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
      </div> */}
        {/* End Row 3 */}
        {/* <div className="row">
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
      </div> */}
        {/* End Row 4 */}
        {/* <div className="row" id="pantry">
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
      </div> */}
      </div>
    </div>
  );
};

export default North;
