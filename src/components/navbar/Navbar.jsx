import { FaRegHeart } from 'react-icons/fa6'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ borderBottom: '1px solid gray' }}>
      <ul>
        <li>
          {/* <Link>Logo</Link> */}
          <Link to='/layout/addPost'>
            <IoMdAdd />
          </Link>
        </li>
        <li>
          <Link to='/layout'>
            <img
              src='https://thumbs.wbm.im/pw/small/26cdaa21d7039546ac5aa10a591d6498.png'
              alt=""
              height="70px"
            />
          </Link>
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
