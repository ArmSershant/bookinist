import { Link } from "react-router-dom"
import axios from "axios"
import styles from "./BookItem.module.css"
import { API_BASE_URL } from "./../../constants"
const BookItem = (book) => {
  const deleteBook = () => {
    axios.delete(`${API_BASE_URL}/${book.id}`).then((r) => {
      console.log(r.data)
      book.onDelete(book.id)
    })
  }
  return (
    <div className={styles.book}>
      <img src={book.photo} alt="" />
      <h3>{book.title}</h3>
      <p>
        By <b>{book.author}</b>
      </p>
      <p>
        Price: <b>{book.price} AMD</b>
      </p>
      <Link className={styles.details} to={"/books/item/" + book.id}>
        <button className={styles.btnDetails}>See Details</button>
      </Link>
      <button className={styles.btnDelete} onClick={deleteBook}>
        Delete
      </button>
    </div>
  )
}
export default BookItem
