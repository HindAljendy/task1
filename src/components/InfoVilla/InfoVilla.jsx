import './InfoVilla.css'
import photo_InfoVilla1 from './../../assets/images/info-icon-01.png';
import photo_InfoVilla2 from './../../assets/images/info-icon-02.png';
import photo_InfoVilla3 from './../../assets/images/info-icon-03.png';
import photo_InfoVilla4 from './../../assets/images/info-icon-04.png';

const InfoVilla = () => {
  return (
    <div className='HJ_InfoVilla'>
        <div className='HJ_Description HJ_BottomLine'>
            <img src={photo_InfoVilla1} alt = "Photo_INfoVilla" className='HJ_IMgInfo'/>
            <div className='HJ_Features'>
                <h4>250 m2</h4>
                <span>Total Flat Space</span>
            </div>
        </div>
        <div className='HJ_Description HJ_BottomLine'>
            <img src={photo_InfoVilla2} alt = "Photo_INfoVilla" className='HJ_IMgInfo'/>
            <div className='HJ_Features'>
                <h4>Contract</h4>
                <span>Contract Ready</span>
            </div>
        </div>
        <div className='HJ_Description HJ_BottomLine'>
            <div className='HJ_PHoto_Villa'>
              <img src={photo_InfoVilla3} alt = "Photo_INfoVilla" className='HJ_IMgInfo'/>
            </div>
            <div className='HJ_Features'>
                <h4>Payment</h4>
                <span>Payment Process</span>
            </div>
        </div>
        <div className='HJ_Description'>
            <div className='HJ_PHoto_Villa'>
              <img src={photo_InfoVilla4} alt = "Photo_INfoVilla" className='HJ_IMgInfo'/>   
            </div>
            <div className='HJ_Features'>
                <h4>Safety</h4>
                <span>24/7 Under control</span>
            </div>
        </div>
    </div>
  )
}

export default InfoVilla