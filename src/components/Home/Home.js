import { Link } from "react-router-dom"
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div>
      <h3 className={styles.title}>Best books of all time</h3>
      <div className={styles.links}>
        <Link to="/books">All Books</Link>
        <Link to="/books/add">Add a Book</Link>
      </div>
      <img
        src={require("../../photos/cover.jpeg")}
        className={styles.photo}
        alt=""
      />
    </div>
  )
}
export default Home
