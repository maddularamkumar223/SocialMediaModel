import { FaRegMessage, FaRegUser } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <nav style={{ borderTop: '1px solid gray' }}>
      <ul>
        <li>
          <Link to='/layout'>
            <IoHomeOutline />
          </Link>
        </li>
        <li>
          <Link to='/layout/messages'>
            <FaRegMessage />
          </Link>
        </li>
        <li>
          <Link to='/layout/search'>
            {' '}
            <IoMdSearch />
          </Link>
        </li>
        <li>
          <Link to='/layout/profile'>
            <FaRegUser />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
