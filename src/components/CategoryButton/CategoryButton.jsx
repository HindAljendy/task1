import { Link } from 'react-router-dom'
import './CategoryButton.css'

const CategoryButton = ({Button_Category}) => {
  return (
    <div className='HJ_CategoryButton'>
        <Link to="/">
          {Button_Category}
        </Link>
    </div>
  )
}

export default CategoryButton