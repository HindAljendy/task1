import './BoxInfo.css'


const BoxInfo = ({ Icon ,BoxTitle ,BoxSubTitle  }) => {
  return (
    <div className='HJ_BoxInfo'>
        <div className='HJ_ItemBox'>
            <img src={Icon} alt="Icon Info" />
            <div className='HJ_ItemInfoo'>
              <h6 className='HJ_TitleBox'>{BoxTitle}<br></br>
              <span className='HJ_SubTitleBox'>{BoxSubTitle}</span></h6>
            </div>
        </div>

    </div>
  )
}

export default BoxInfo