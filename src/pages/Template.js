import { Link } from "react-router-dom";

export const Template = ({ urlLink8, header }) => {
  return (
    <div className="col">
      <h1>{header}</h1>
    </div>
  );
};
// export const Header = ({urlLink8, header}) => {
//   return (
//     <div>
//     <p className="p text-left">
// 	   <a to={urlLink8}>←</a></p>
// 	  <p> <h1>{header}</h1></p>
//     </div>
//   );
// };

export const Logo = ({ a, img }) => {
  return (
    <div className="col">
      <a href={a}>
        <img src={img} id="sncc" alt="Logo" />
      </a>
    </div>
  );
};

export const PantryInfo = ({
  bussinessName,
  bussinessName2,
  bussinessName3,
  adress,
  cityStateZip,
  phone,
}) => {
  return (
    <div className="col">
      <p id="arrow text-left">{bussinessName}</p>
      <p id="arrow text-left">{bussinessName2}</p>
      <p id="arrow text-left">{bussinessName3}</p>
      <p>{adress}</p>
      <p>{cityStateZip}</p>
      <p>{phone}</p>
    </div>
  );
};

export const Hour = ({
  day1,
  time1,
  day2,
  time2,
  day3,
  time3,
  day4,
  time4,
  day5,
  time5,
}) => {
  return (
    <div className="col" id="hours">
      <p>
        {day1} {time1}
      </p>
      <p>
        {day2} {time2}
      </p>
      <p>
        {day3} {time3}
      </p>
      <p>
        {day4} {time4}
      </p>
      <p>
        {day5} {time5}
      </p>
    </div>
  );
};

export const Requirements = ({ text1, text2, text3, text4, text5, text6 }) => {
  return (
    <div className="col">
      <h4>Requirement:</h4>
      <ul>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
        <p>{text5}</p>
        <p>{text6}</p>
      </ul>
    </div>
  );
};

export const SocialMediaHandles = ({
  facebook,
  instagram,
  twitter,
  linkedIn,
  image,
  image1,
  image2,
  image3,
}) => {
  if (!facebook && !instagram && !twitter && !linkedIn) {
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
      {facebook && (
        <span>
          <a href={facebook}>
            <img src={image} id="logo" alt="logo"/>
          </a>
        </span>
      )}
      {instagram && (
        <span>
          <a href={instagram}>
            <img src={image1} id="logo" alt="logo"/>
          </a>
        </span>
      )}
      {twitter && (
        <span>
          <a href={twitter}>
            <img src={image2} id="logo" alt="logo" />
          </a>
        </span>
      )}
      {linkedIn && (
        <span>
          <a href={linkedIn}>
            <img src={image3} id="logo" alt="logo"/>
          </a>
        </span>
      )}
    </div>
  );
};
export const FoodBank = ({
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
        <a href={urlLink4} id="arrow">
          {bussinessName4}
        </a>{" "}
        {bussinessName5}
      </h4>
      <h4>{bussinessName6}</h4>
      <p>{adress2}</p>
      <p>{cityStateZip2}</p>
      <p>{phone2}</p>
    </div>
  );
};
export const Finder = ({ finder1, finder2, urlLink5, finder3 }) => {
  return (
    <div className="col">
      <p>{finder1}</p>
      <p>{finder2}</p>
      <Link href={urlLink5} id="arrow">
        {finder3}{" "}
      </Link>
    </div>
  );
};

export const Mobile = ({ mobile1, mobile2, urlLink6, mobile3 }) => {
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

export const Fresh = ({ fresh1, fresh2, urlLink7, fresh3 }) => {
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

export default Template;
