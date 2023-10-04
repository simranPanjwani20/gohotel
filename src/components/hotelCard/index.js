import React, {useState, useEffect}from 'react';
import './style.css';

const PropertyCard = (props) => {
  const propertyInfo = props.property;

  const [isWishlisted, setWishlist] = useState(false);

  //manage wishlist btn
  const handleWishlist = () => {
    if(isWishlisted){
      setWishlist(false)
    }
    else
    setWishlist(true);
  };

  const handlePath = (propertyId) => {
   window.location.href=`/property/${propertyId}`
  };

  return (
    <div className="property-propertyd" onClick={()=>{handlePath(propertyInfo.propertyId)}}>
        <div className="imges">
        <div className="property-actions">
        <button className="rent-now-button">Rent Now</button>
        <div className="wishlistcont">
            {
                isWishlisted?<svg  width="40px" height="40px"onClick={handleWishlist} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgpropertyrier" stroke-width="0"></g><g id="SVGRepo_tracerpropertyrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconpropertyrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#1C274C"></path> </g></svg>:<svg  width="40px" height="40px"onClick={handleWishlist} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
            </div>
          </div>
     <img src={propertyInfo.img} alt="" />
     </div>
      <div className="property-details">
        <div className="property-location">
        <svg  width="40px" height="40px"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e0971a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <h4>{propertyInfo.location}</h4>
        </div>
        <div className="property-name">
            <h2>{propertyInfo.name} {propertyInfo.country}</h2>
        </div>
        <div className="property-features">
          <div className="property-icons">
          <svg  width="40px" height="40px"fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,7V21a1,1,0,0,0,1,1H13V6H3A1,1,0,0,0,2,7ZM5,9h5v2H5Zm0,4h5v2H5Zm0,4h5v2H5ZM22,3V21a1,1,0,0,1-1,1H15V4H10V3a1,1,0,0,1,1-1H21A1,1,0,0,1,22,3Z"></path></g></svg>
          <svg  width="40px" height="40px"fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,12V4a1,1,0,0,0-2,0V6H6V4A1,1,0,0,0,4,4v8a2,2,0,0,0-2,2v6a1,1,0,0,0,2,0V18H20v2a1,1,0,0,0,2,0V14A2,2,0,0,0,20,12Zm-6-2h3a1,1,0,0,1,1,1v1H13V11A1,1,0,0,1,14,10ZM6,11a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v1H6Z"></path></g></svg>
          <svg  width="40px" height="40px"fill="#000000" viewBox="0 0 512 512" id="Layer_1" enable-background="new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m496 288c-38.154 0-437.487 0-448 0v-56h32c8.837 0 16-7.164 16-16v-40c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-16v-138.745c0-25.903 31.562-39.064 49.941-20.686l16.94 16.94c-13.424 23.401-10.164 53.835 9.805 73.805l8 8c6.247 6.248 16.379 6.249 22.627 0l64-64c6.249-6.248 6.249-16.379 0-22.627l-8-8c-20.35-20.351-50.837-23.06-73.817-9.817l-16.928-16.928c-11.57-11.57-26.952-17.942-43.313-17.942-33.776 0-61.255 27.479-61.255 61.255v226.745c-8.837 0-16 7.164-16 16s7.163 16 16 16v32c0 43.889 19.742 83.247 50.806 109.681l-22.338 23.229c-9.803 10.193-2.445 27.09 11.53 27.09 4.199 0 8.394-1.644 11.534-4.91l26.218-27.263c19.844 10.326 42.376 16.173 66.25 16.173h192c23.874 0 46.406-5.847 66.25-16.173l26.218 27.263c6.106 6.35 16.234 6.585 22.623.442 6.369-6.125 6.566-16.254.441-22.623l-22.338-23.229c31.064-26.433 50.806-65.791 50.806-109.68v-32c8.837 0 16-7.164 16-16s-7.163-16-16-16zm-310.89-223.738-40.845 40.845c-8.246-11.427-7.23-27.515 3.048-37.794 10.378-10.377 26.461-11.259 37.797-3.051zm278.89 287.738c0 61.757-50.243 112-112 112h-192c-61.757 0-112-50.243-112-112v-32h416z"></path> </g> </g></svg>
          <svg  width="40px" height="40px"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.28169C16.9842 3.64113 20.3589 7.01581 20.7183 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20.7183C20.3589 16.9842 16.9842 20.3589 12.75 20.7183V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7183C7.01581 20.3589 3.64113 16.9842 3.28169 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3.28169C3.64113 7.01581 7.01581 3.64113 11.25 3.28169V2C11.25 1.58579 11.5858 1.25 12 1.25ZM12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75ZM12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z" fill="#1C274C"></path> </g></svg>
          </div>
          <div className="iconFeatures">
            <p>{propertyInfo.rooms} Rooms</p>
            <p>{propertyInfo.bedroom} Bed</p>
            <p>{propertyInfo.bathrooms} Bath</p>
            <p>{propertyInfo.area} sft</p>
          </div>
          
        </div>
        <hr className="separator" />
        <div className="property-price-actions">
          <div className="property-price"><span className="amtproperty">${propertyInfo.price}</span>/month</div>
            <button className="read-now-button" onClick={()=>{handlePath(propertyInfo.propertyId)}}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
