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

const West = () => {
  return (
    <div className="container-fluid news">
      <div className="row" id="link">
        <div className="col-1">
          <Link to="/" id="arrow">
            ⇦
          </Link>
        </div>
        <Template header="West Side Pantry Information:" />
      </div>

      <div className="row" id="row">
        <div className="col">
          <Logo
            a="https://www.peace-caa.org/programs/frc/wsfrc/"
            img="./logos/peace.png"
          />
        </div>
        <PantryInfo
          bussinessName="PEACE INC"
          bussinessName2="Westside Family Resource Center"
          adress="200 Wyoming Street"
          cityStateZip="Syracuse NY 13204"
          phone="(315) 470-3352"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="MON" time="Closed" />
          <Hour day="WED" time="Closed" />
          <Hour day="THUR" time="Closed" />
        </div>
        <Requirements
          text1="First time user must fill"
          text2="out registration form."
        />
        <SocialMediaHandles
          urlLink="https://www.facebook.com/PEACEIncSyr/"
          image="./logos/ico-facebook.png"
          urlLink1="https://twitter.com/PeaceIncSyr"
          image1="./logos/ico-twitter.png"
          urlLink2="https://www.pinterest.com/PeaceIncSyr/"
          image2="./logos/ico-instagram.png"
        />
      </div>
      {/* End Row 1 */}
      <div className="row" id="row">
        <div className="col">
          <Logo a="https://www.saintlucys.org/outreach-ministries" img="./logos/stlucy.png" />
        </div>
        <PantryInfo
          bussinessName="Saint Lucy’s Church"
          bussinessName2=""
          adress=" 432 Gifford Street"
          cityStateZip="Syracuse NY 13204"
          phone="315-424-0023"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="MON" time="9AM - 12PM" />
          <Hour day="TUE" time="9AM - 12PM" />
        </div>
        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
          text4="Must live within Pantry boundaries."
        />
        <SocialMediaHandles 
       
        />
      </div>
      {/* End Row 2 */}
      <div className="row" id="row">
        <Logo a="https://www.stpatricksandstbrigids.org/ministries/" img="./logos/stpatrick.png" />

        <PantryInfo
          bussinessName="Saint Patrick / "
          bussinessName2="Saint Brigid’s Food Pantry"
          adress="216 North Lowell Aveune"
          cityStateZip="Syracuse NY 13204"
          phone=" 315-679-6825"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="TUE" time="11AM - 1PM" />
        </div>
        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
          text4="Must live within Pantry boundaries."
        />
        <SocialMediaHandles 
          urlLink="https://www.facebook.com/SaintPatricksSaintBrigids"
          image="./logos/ico-facebook.png"
        />
      </div>
      {/* End Row 3 */}
      <div className="row" id="row">
        <Logo a="https://www.unyumc.org/resources/church/syracuse-brown-memorial-umc" img="./logos/brown.png" />

        <PantryInfo
          bussinessName="Brown Memorial Church"
          bussinessName2="Food Distribution Center"
          adress="228 Davis Street"
          cityStateZip="Syracuse NY 13204"
          phone="315-474-8855"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="First Wed of every Month" time="2PM - 4:30PM" />
        </div>

        <Requirements
          text1="Photo ID."
          text2="Proof of adress."
          text3="Proof of any adult and children in household."
          text4="Must live within Pantry boundaries."
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

export default West;
