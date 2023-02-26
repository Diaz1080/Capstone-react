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
          <Hour day="Last SAT of Month" time="11AM - 2PM" />
          
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
          <Logo a="https://emmausministry.org/services-we-provide/outreach-center/" img="./logos/emmaus.png" />
        </div>
        <PantryInfo
          bussinessName="Emmaus Ministry "
          bussinessName2="Food Pantry"
          adress="127 East Glen Avenue"
          cityStateZip="Syracuse NY 13205"
          phone="315-928-5191"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="3rd WED of month" time="1PM - 2PM" />
        </div>
        <Requirements
          text1="Onondaga County residents"
         
        />
        <SocialMediaHandles />
      </div>
      {/* End Row 2 */}
      <div className="row" id="row">
        <Logo a="" img="./logos/pantry.jpg" />

        <PantryInfo
          bussinessName="Belle Grove Missionary Baptist"
          bussinessName2="Emergency Food Pantry"
          adress="219 Martin Luther King West"
          cityStateZip="Syracuse NY 13205"
          phone=" 315-466-9838"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="By appointment" time="call daily until 4 PM" />
        </div>
        <Requirements
          text1="Must reside in zip codes 13205 or 13207"
          text2="For emergency need call; 315-466-9838 (Shenorah McMillian)"
          text3="or 315-476-7391 (Belle Grove Missionary Baptist)"
          text4="Picture ID, proof of all members of the household, proof of address"
        />
        <SocialMediaHandles />
      </div>
      {/* End Row 3 */}
      <div className="row" id="row">
        <Logo a="https://valleyworshipcenter.weebly.com/" img="./logos/valley.png" />

        <PantryInfo
          bussinessName="Valley Worship Center Church of the Nazarene"
          bussinessName2="Valley Worship Center Food Pantry"
          adress="2929 Midland Avenue"
          cityStateZip="Syracuse NY 13205"
          phone="315-492-2231"
        />
        <div className="col">
          <h4>Hours:</h4>
          <Hour day="THUR" time="10PM - 12PM" />
          <Hour day="First THUR of Month" time="2PM - 4:30PM" />
        </div>

        <Requirements
          text1="Onondaga County residents."
          
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
