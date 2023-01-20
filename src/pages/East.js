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

const East = () => {
  return (
    <div className="container-fluid news">
      <div className="row" id="link">
        <div className="col-1">
          <Link to="/" id="arrow">
            ⇦
          </Link>
        </div>
        <Template header="East Side Pantry Information:" />
      </div>

      <div className="row" id="row">
        <div className="col">
          <Logo
            a="https://westcottcc.org/food-pantry/"
            img="./logos/westcott.png"  alt="logo"
          />
        </div>
        <PantryInfo
          bussinessName="Westcott Community Center"
          bussinessName2="Basic Needs Pantry"
          adress="826 Euclid Ave"
          cityStateZip="Syracuse NY 13210"
          phone="(315) 478.8634 ext. 0"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="MON twice Monthly" time="1PM - 3PM" />
        </div>
        <Requirements
          text1="Must live in zip codes "
          text2="13210, 13224."
          text3="Must sign paper attesting to "
          text4="low income status."
        />
        <SocialMediaHandles
          urlLink="https://www.facebook.com/westcottcommunitycenter/"
          image="./logos/ico-facebook.png" alt="logo"
        />
      </div>
      {/* End Row 1 */}
      <div className="row" id="row">
        <div className="col">
          <Logo a="https://www.thetablefoodpantry.org/" img="./logos/thetable.png"  alt="logo"/>
        </div>
        <PantryInfo
          bussinessName="The Table"
          bussinessName2="Living Word Church"
          bussinessName3="Community Food Pantry"
          adress="6099 Court Street Rd"
          cityStateZip="Syracuse NY 13206"
          phone="+1 833-448-2253"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="Twice a month SAT" time="9AM - 11AM" />
        </div>
        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
          text4="Visit website for specific Dates and "
          text5="to register in advance."
        />
        <SocialMediaHandles 
        urlLink="https://www.facebook.com/thetablecommunityfoodpantry/"
        image="./logos/ico-facebook.png"
        urlLink1="https://www.instagram.com/thetablefoodpantry/?igshid=6dol5m0yfju2"
        image1="./logos/ico-instagram.png"
        />
      </div>
      {/* End Row 2 */}
      <div className="row" id="row">
        <Logo a="https://vineyardny.org/foodpantry" img="./logos/vineyardlogo.png"  alt="logo"/>

        <PantryInfo
          bussinessName="Vineyard Church Food Distribution"
          bussinessName2=""
          adress="718 S Beech Street"
          cityStateZip="Syracuse NY 13210"
          phone="(315) 407-8463)"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="SAT" time="1AM - 11:30AM" />
        </div>
        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
        />
        <SocialMediaHandles 
        urlLink="https://www.facebook.com/vineyardnysyracuse/"
        image="./logos/ico-facebook.png"
        urlLink1="https://www.instagram.com/vineyardNYsyracuse/"
        image1="./logos/ico-instagram.png"
        />
        
      </div>
      {/* End Row 3 */}
      <div className="row" id="row">
        <Logo a="https://claupc.org/syracuse/" img="./logos/pantry.jpg"  alt="logo"/>

        <PantryInfo
          bussinessName="Food Pantry"
          bussinessName2="Food Distribution Center"
          adress="adress"
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
          image1="./logos/ico-instagram.png " 
          urlLink2="http://www.linkedin.com/company/food-bank-of-central-new-york"
          image2="./logos/ico-linkedin.png"  
          urlLink3="http://twitter.com/foodbankofcny"
          image3="logos/ico-twitter.png"  
        />
      </div>
    </div>
  );
};

export default East;
