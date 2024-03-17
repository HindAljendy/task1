import "./ListOfExtraInfo.css";

const ListOfExtraInfo = () => {
  return (
    <div className="HJ_ListOfExtraInfo">
      <div className="HJ_List HJ_BottomLine ">
        <h4>Total Flat Space</h4>
        <span>185 m2</span>
      </div>
      <div className="HJ_List HJ_BottomLine">
        <h4>Floor number</h4>
        <span>26th</span>
      </div>
      <div className="HJ_List HJ_BottomLine">
        <h4>Number of rooms</h4>
        <span>4</span>
      </div>
      <div className="HJ_List HJ_BottomLine">
        <h4>Parking Available </h4>
        <span>Yes</span>
      </div>
      <div className="HJ_List">
        <h4>Payment Process</h4>
        <span>Bank</span>
      </div>
    </div>
  );
};

export default ListOfExtraInfo;
