import "./ExtraInfoProperty.css";
import CategoryButton from "../CategoryButton/CategoryButton";
import ListOfExtraInfo from "../ListOfExtraInfo/ListOfExtraInfo";
import ImgExtraInfo from "./../../assets/images/property-05.jpg";
import Button_ScheduleVisit from "../Button_ScheduleVisit/Button_ScheduleVisit";

const ExtraInfoProperty = () => {
  return (
    <div className="HJ_ExtraInfoProperty">
      <div className="container_custom">
        <div className="HJ_ExtraInfo_PartOne">
          <div className="HJ_ExtraInfo_Title">
            <h6>| BEST DEAL</h6>
            <h2>Find Your Best Deal Right Now!</h2>
          </div>
          <div className="HJ_FiltersVilla">
            <CategoryButton Button_Category="Appartment" />
            <CategoryButton Button_Category="Villa House" />
            <CategoryButton Button_Category="Penthouse" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ListOfExtraInfo />
          </div>
          <div className="col-lg-6">
            <img
              src={ImgExtraInfo}
              alt="Image ExtraInfo"
              className="HJ_ImgExtraInfo"
            />
          </div>
          <div className="col-lg-3">
            <h4 className="HJ_Heading_ExtraInfo">Extra Info About Property</h4>
            <p className="HJ_Paragraph_ExtraInfo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor pack incididunt ut labore et dolore magna aliqua
              quised ipsum suspendisse.
              <br></br>
              <br></br>
               When you need free CSS templates, you
              can simply type TemplateMo in any search engine website. In
              addition, you can type TemplateMo Portfolio, TemplateMo One Page
              Layouts, etc.
            
            </p>
            <div className="HJ_Btn_ExtraInfo">
              <Button_ScheduleVisit/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfoProperty;
