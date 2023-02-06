import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { API_BASE_URL } from "../../constants"
import BookItem from "../BookItem/BookItem"
import axios from "axios"
import styles from "./BookDetails.module.css"
const BookDetails = () => {
  const [book, setBook] = useState(null)
  const [otherBooks, setOtherBooks] = useState([])
   const params = useParams()
   const {id} = useParams()
  useEffect(() => {
    axios.get(`${API_BASE_URL}/${params.id}`).then((r) => {
      setBook(r.data.book)
      setOtherBooks(r.data.others)
    })
  }, [params.id,id])
  return !book ? (
    <p>Loading... Please be patient</p>
  ) : (
    <div className={styles.content}>
      <div className={styles.row}>
        <div className={styles.book}>
          <img src={book.photo} alt="" />
          <div>
            <h2 className={styles.title}>{book.title}</h2>
            <p>
              <b>{book.pages} pages</b>
            </p>
            <p className={styles.price}>{book.price} AMD</p>
            <p>{book.description}</p>
          </div>
        </div>
        <div className={styles.author}>
          <img src={book.authorPhoto} alt="" />
          <h3>{book.author}</h3>
          <p>{book.aboutAuthor}</p>
          <div className={styles.other}>
            <h4>Other Books</h4>
            <div className={styles.row}>
              {otherBooks.map((elm) => {
                return <BookItem key={elm.id} {...elm} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookDetails
