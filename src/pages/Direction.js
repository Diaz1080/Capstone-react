import { useEffect, useState } from "react";
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
  Finder
} from "../pages/Template";
import "./News.scss";

const Direction = (props) => {
  const [pantries, setPantries] = useState([]);
  useEffect(() => {
    const makeAPICall = async () => {
      const response = await fetch(
        `http://localhost:3001/pantries/${props.direction}`
      );
      const pantriesData = await response.json();
      setPantries(pantriesData.pantries);
    };
    makeAPICall();
  }, []);
  return (
    <div className="container-fluid news">
      <div className="row" id="link">
        <div className="col-1">
          <Link to="/" id="arrow">
            ⇦
          </Link>
        </div>
        <Template header="Food Pantry Information:" />
      </div>

      {pantries.map((pantry) => {
        return (
          <div className="row" id="row">
            <div className="col">
              <Logo a={pantry.link} img={pantry.logo} alt="logo" />
            </div>
            <PantryInfo
              bussinessName={pantry.companyName}
              bussinessName2={pantry.companyNameContinued}
            adress={pantry.adress}
              cityStateZip={pantry.cityStateZip}
              phone={pantry.phone}
            />
            <div className="col">
              <h4>Hours:</h4>
            <Hour day={pantry.day} time={pantry.time} />
         
            </div>
            <Requirements
              text1={pantry.text1}
              text2={pantry.text2}
              text3={pantry.text4}
              text4={pantry.text4}
              text5={pantry.text5}
              text6={pantry.text6}
            />
            <SocialMediaHandles
              facebook={pantry.facebook}
              image="./logos/ico-facebook.png"
              
              instagram={pantry.instagram}
              image1="./logos/ico-instagram.png"
              
              twitter={pantry.twitter}
              image2="./logos/ico-twitter.png"
              
              linkedIn={pantry.linkedIn}
              image3="./logos/ico-linkedin.png"
             
            />
          </div>
        );
      })}

      
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

export default Direction;
