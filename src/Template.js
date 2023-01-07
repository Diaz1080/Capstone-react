import App from './App';

const Logo = ({a, img}) => {
    return (
      <div class="col">
            <a href={a}>
              <img src={img} id="sncc"
            /></a>
          </div>
    )
  }
  
  const PantryInfo = ({bussinessName, bussinessName2, adress, cityStateZip}) => {
      return (
          <div className="col" >
            <p id="arrow text-left">{bussinessName}</p>
            <p id="arrow text-left">{bussinessName2}</p>
            <p>{adress}</p>
            <p>{cityStateZip}</p>
            </div>
    )
        };
  
    const Hour = ({day, time}) => {
        return (
        <div className="col" id="hours">
          
          <ul>
               <li >{day}: {time}</li>
          </ul>
        </div>
        )
          };
  
    const Requirements = ({text1, text2}) => {
      return (
         <div className="col" >
            <h4 >Requirement:</h4>
            <ul>
              <li>{text1}</li>
              <p>{text2}</p>
            </ul>
          </div>
      )
    };
  
    const SocialMediaHandles = ({urlLink, image}) => {
      return (    
          <div className="col">
            <h4>Social Media Handles:</h4>
            <span 
              ><a href={urlLink}
                ><img src={image} id="logo"/></a
            ></span>
          </div>
          );
        }

export default Template;