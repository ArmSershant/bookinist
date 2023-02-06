import { useEffect, useState } from "react"
import axios from "axios"
import { API_BASE_URL } from "../../constants"
import styles from "./BookList.module.css"
import BookItem from "../BookItem/BookItem"
const BookList = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get(API_BASE_URL).then((r) => {
      setBooks(r.data.items)
    })
  }, [])
  const deleteBook = (id) => {
    let index = books.findIndex((elm) => elm.id === id)
    books.splice(index, 1)
    setBooks([...books])
  }
  return (
    <div className={styles.content}>
      <h1>BookList</h1>
      <div className={styles.books}>
        {books.map((elm) => (
          <BookItem onDelete={deleteBook} key={elm.id} {...elm} />
        ))}
      </div>
    </div>
  )
}
export default BookList
