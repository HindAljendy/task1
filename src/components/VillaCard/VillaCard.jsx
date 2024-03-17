import { Link } from "react-router-dom";
import "./VillaCard.css";

const VillaCard = ({ VillaImage ,Category , PriceVilla , AddressVilla , BedRoomsNumber  , BathRoomsNumber , SpaceVilla ,FloorsNumber  , SpotsNumber}) => {
  return (
    <div className="HJ_ItemCard">
      <img src={VillaImage} alt="villa" className="HJ_Property_IMG" />
      <div className="HJ_Space_CARD">
        <span className="HJ_categoryCard">{Category}</span>
        <h6 className="HJ_priceCard">{PriceVilla}</h6>
      </div>
      <h4 className="HJ_AddressCard">
        <Link to="/Property Details">{AddressVilla}</Link>
      </h4>
      <div className="SpecialFeatures_Card">
        <div className="HJ_NumberRoom_Card">
          <h4>
            Bedrooms:<span>{BedRoomsNumber}</span>
          </h4>
          <h4>
            Bathrooms:<span> {BathRoomsNumber}</span>
          </h4>
        </div>
        <div className="HJ_NumberRoom_Card">
          <h4>
            Area: <span>{SpaceVilla}</span>
          </h4>
          <h4>
            
            Floor:<span>{FloorsNumber}</span>
          </h4>
        </div>
        <h4 className="HJ_SubTitle_font">
          Parking: <span className="HJ_Span_font">{SpotsNumber}</span>
        </h4>
      </div>
      <div className="HJ_ButtonCardVilla text-center">
        <Link to="/Property Details">Schedule a visit</Link>
      </div>
    </div>
  );
};

export default VillaCard;
