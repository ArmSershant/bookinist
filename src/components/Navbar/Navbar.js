import { NavLink, Outlet } from "react-router-dom"
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/books">All Books</NavLink>
          </li>
          <li>
            <NavLink to="/books/add">Add Book</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
export default Navbar