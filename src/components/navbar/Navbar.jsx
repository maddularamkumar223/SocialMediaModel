
import { FaRegHeart } from 'react-icons/fa6'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{borderBottom:"1px solid gray"}}>
      <ul>
        <li>
          {/* <Link>Logo</Link> */}
          <Link to='/layout/addPost'>
            <IoMdAdd />
          </Link>
        </li>
        <li>
          <Link to='/layout'>Logo</Link>
        </li>
        <li>
          <Link to='/layout/notification'>
            <FaRegHeart />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
