
import { FaRegHeart } from 'react-icons/fa6'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{borderBottom:"1px solid gray"}}>
      <ul>
        <li>
          {/* <Link>Logo</Link> */}
          <Link to='/addPost'>
            <IoMdAdd />
          </Link>
        </li>
        <li>
          <Link to='/'>Logo</Link>
        </li>
        <li>
          <Link to='/notification'>
            <FaRegHeart />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
