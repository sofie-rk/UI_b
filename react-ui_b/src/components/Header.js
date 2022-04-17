import { FaBook } from 'react-icons/fa'
import BookType from './BookType'

const Header = () => {
  return (
    <div className='header'>
      Sofie's books <FaBook />
      <BookType />
    </div>
    
  )
}

export default Header