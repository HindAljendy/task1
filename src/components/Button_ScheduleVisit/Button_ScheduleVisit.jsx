import './Button_ScheduleVisit.css'
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom'



const Button_ScheduleVisit = () => {
  return (
    <div className='Button_ScheduleVisit'>

      <div className='HJ_square'><FaCalendar className='HJ_IconCalender'/></div>       
      <Link to ='/'>Schedule a visit</Link>   

    </div>
  )
}

export default Button_ScheduleVisit
